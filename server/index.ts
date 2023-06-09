import fastify from 'fastify'
import 'dotenv/config'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong 🏓'
})

server.listen({ host: HOST, port: Number(PORT) }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
