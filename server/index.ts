import 'dotenv/config'
import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie'
import { fastifySession, SessionStore } from '@fastify/session'
import sessionFileStore from 'session-file-store'
import path from 'path'

import { usersClient, skillsClient, statisticsClient } from './api'
import { getAuthenticationUrl, getAuthenticatedUser } from './auth/googleAuth'
import { HTTPS_CERT, HTTPS_KEY } from './cert'
import {
  SESSION_KEY,
  SESSION_MAX_AGE,
  FRONTEND_APP,
  FRONTEND_ROUTE,
  FRONTEND_URL,
} from './config'
import { Skill } from './types'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
const BASE_URL = `https://${HOST}:${PORT}`

type FileStorType = { new (params?: Record<string, unknown>): SessionStore }
const FileStore: FileStorType = sessionFileStore(fastifySession)

type FastifyOptions = {
  trustProxy?: boolean
  https?: {
    cert: string
    key: string
  }
}

function getFastifyOptions(): FastifyOptions {
  return process.env.NODE_ENV === 'production'
    ? { trustProxy: true }
    : { https: { cert: HTTPS_CERT, key: HTTPS_KEY } }
}

const server = fastify(getFastifyOptions())

server.register(fastifyCookie)
server.register(fastifySession, {
  cookie: {
    maxAge: SESSION_MAX_AGE,
    sameSite: 'none',
    secure: 'auto',
  },
  secret: SESSION_KEY,
  store: new FileStore({ path: './sessions' }),
})
server.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
})
server.addHook('preHandler', (req, reply, next) => {
  if (['/auth/login', '/auth/google/complete'].includes(req.routerPath)) {
    return next()
  }
  try {
    const token = req.session.get('token')
    if (!token || typeof token !== 'object') {
      throw new Error('token not found')
    }
    req.user = token
  } catch (e) {
    req.user = null
  }
  next()
})

// Client routing "catchall"
server.get('/:*', (_, reply) => {
  reply.type('text/html').send(FRONTEND_APP)
})

// Handle Google login
server.get('/auth/login', (_, reply) => {
  reply.redirect(getAuthenticationUrl())
})

// Handle Google response
server.get('/auth/google/complete', async (req, reply) => {
  try {
    const token = await getAuthenticatedUser(req.url, BASE_URL)
    req.session.set('token', token)
    reply.redirect(FRONTEND_ROUTE.PROFILE)
  } catch (e) {
    reply.status(403).send(e)
  }
})

// Handle logout
server.get('/auth/logout', async (req, reply) => {
  await req.session.destroy()
  reply.redirect(FRONTEND_ROUTE.LOGOUT)
})

// Expose current user
server.get('/auth/me', (req) => req.user)

// API endpoints
server.get('/api/users/available', async () => {
  return await usersClient.getUsersByFilter('AVAILABLE')
})

server.get('/api/skills', async () => {
  const users = await usersClient.getUsersByFilter('ALL')
  return await skillsClient.getAllSkills(users)
})

server.get('/api/search/skills', async (req) => {
  const { name } = req.query as { name: string }
  const users = await usersClient.getUsersByFilter('ALL')
  return await skillsClient.getSkillsByName(users, name)
})

server.post('/api/search/skills/users', {}, async (req) => {
  const { startDate, input } = JSON.parse(req.body as string) as {
    startDate: string
    input: Skill['id'][]
  }
  const users = await usersClient.getUsersByFilter('AVAILABLE', startDate)
  const skills = await skillsClient.getSkillsByUsers(users)
  return await usersClient.getUsersBySkills(input, users, skills)
})

server.get('/api/statistics/:startDate/users', async (req) => {
  const { startDate } = req.params as { startDate: string }
  return await statisticsClient.getUserStatistics(startDate)
})

server.get('/api/statistics/:startDate/skills/:limit', async (req) => {
  const { startDate, limit } = req.params as {
    startDate: string
    limit: number
  }
  return await statisticsClient.getSkillStatistics(startDate, limit)
})

// Start server
function start() {
  try {
    server.register(fastifyCors, {
      credentials: true,
      methods: ['GET', 'PUT', 'POST'],
      origin: FRONTEND_URL,
    })
    server.listen({ host: HOST, port: Number(PORT) }, (err) => {
      if (err) {
        console.error(err)
        process.exit(1)
      }
    })
  } catch (err) {
    if (err) {
      console.error(err)
      process.exit(1)
    }
  }
}

start()
