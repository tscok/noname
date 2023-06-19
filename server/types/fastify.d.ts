import { Token } from '../auth/googleAuth'

declare module 'fastify' {
  interface FastifyRequest {
    user: Token | null
  }
  interface Session {
    token: Token
  }
}
