import 'dotenv/config'
import fastify, { FastifyRequest } from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie'
import { fastifySession, SessionStore } from '@fastify/session'
import sessionFileStore from 'session-file-store'
import path from 'path'

import { userClient } from './cinode'
import { getAuthenticationUrl, getAuthenticatedUser } from './auth/googleAuth'
import { HTTPS_CERT, HTTPS_KEY } from './cert'
import {
  SESSION_KEY,
  SESSION_MAX_AGE,
  FRONTEND_APP,
  FRONTEND_ROUTE,
  FRONTEND_URL,
} from './config'

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

server.get('/api/users', async () => {
  return await userClient.getUsers()
})

server.get('/api/users/available', async () => {
  return await userClient.getUsersAvailable()
})

server.get('/api/users/:userId', async (req) => {
  const { userId } = req.params as { userId: number }
  return await userClient.getUser(userId)
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
