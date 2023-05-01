import { ZodError } from 'zod'
import { appRoutes } from './http/routes'
import fastify from 'fastify'
import { env } from './env'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issue: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO: here we should log to an external tool like DataLog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error' })
})
