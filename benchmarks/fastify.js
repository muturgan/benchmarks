'use strict'

const fastify = require('fastify')()

const schema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          hello: {
            type: 'string'
          }
        }
      }
    }
  }
}

fastify.get('/benchmarks', schema, function (req, reply) {
  reply.send({ hello: 'benchmarks' })
})

fastify.listen(3000)
