import 'dotenv/config'
import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8080

const server = fastify()

server.register(fastifyStatic, {
  root: path.join(__dirname, '../public'),
})

server.listen({ host: HOST, port: Number(PORT) }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
