import morgan, { StreamOptions } from 'morgan'

import { logger } from '../lib'
import { isDevelopment } from '../envs'
import { Request } from '../types'

const loggerStream: StreamOptions = {
  write: (message) =>
    logger.http(message.substring(0, message.lastIndexOf('\n'))),
}

const registerGraphQLToken = () => {
  morgan.token('graphql-query', (req: Request) => `GraphQL ${req.body.query}`)
}

registerGraphQLToken()
const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms\n:graphql-query',
  { stream: loggerStream, skip: () => !isDevelopment },
)

export default morganMiddleware
