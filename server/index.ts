import 'dotenv/config'
import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import fastifyCors from '@fastify/cors'
import path from 'path'
import { authenticationUrl, getAuthenticatedUser } from './auth/googleAuth'
import { HTTPS_CERT, HTTPS_KEY } from './cert'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080
const BASE_URL = `https://${HOST}:${PORT}`

type ServerOptions = {
  trustProxy?: boolean
  https?: {
    cert: string
    key: string
  }
}

const serverOptions: ServerOptions =
  process.env.NODE_ENV === 'production'
    ? { trustProxy: true }
    : { https: { cert: HTTPS_CERT, key: HTTPS_KEY } }

const server = fastify(serverOptions)

server.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
})
server.register(fastifyCors, {
  credentials: true,
  methods: ['GET', 'PUT', 'POST'],
  origin: process.env.FE_URL,
})

// Google login
server.get('/auth/login', (_, reply) => {
  reply.redirect(authenticationUrl)
})

// Google response
server.get('/auth/google/complete', async (request, reply) => {
  try {
    await getAuthenticatedUser(request, BASE_URL)
    // handle sessions
    reply.redirect('/')
  } catch (e) {
    reply.status(403).send(e)
  }
})

server.listen({ host: HOST, port: Number(PORT) }, (err) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
})
