import 'dotenv/config'
import fs from 'fs'
import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import fastifyCookie from '@fastify/cookie'
import { fastifySession, SessionStore } from '@fastify/session'
import sessionFileStore from 'session-file-store'
import path from 'path'
import { getAuthenticationUrl, getAuthenticatedUser } from './auth/googleAuth'
import { HTTPS_CERT, HTTPS_KEY } from './cert'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
const BASE_URL = `https://${HOST}:${PORT}`
const MAX_AGE = 1000 * 60 * 60 * 24 // 24 hours
const SESSION_KEY = process.env.SESSION_KEY || ''
const REDIRECT = {
  ROOT: '/',
  PROFILE: '/profile',
  LOGOUT: '/logout',
  LOGIN: '/login',
}
const CLIENT_APP = fs.readFileSync(`../public/index.html`, 'utf-8')

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
    maxAge: MAX_AGE,
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
  reply.type('text/html').send(CLIENT_APP)
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
    reply.redirect(REDIRECT.PROFILE)
  } catch (e) {
    reply.status(403).send(e)
  }
})

// Handle logout
server.get('/auth/logout', async (req, reply) => {
  await req.session.destroy()
  reply.redirect(REDIRECT.LOGOUT)
})

// Expose current user
server.get('/auth/me', (req) => req.user)

// Start server
function start() {
  try {
    server.register(fastifyCors, {
      credentials: true,
      methods: ['GET', 'PUT', 'POST'],
      origin: process.env.FE_URL,
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
