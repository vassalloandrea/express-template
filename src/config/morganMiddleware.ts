import { IncomingMessage } from 'http'
import morgan, { StreamOptions } from 'morgan'

import { logger } from '../lib'
import { isDevelopment } from './dotenv'

interface Request extends IncomingMessage {
  body: {
    query: String
  }
}

const loggerStream: StreamOptions = {
  write: (message) =>
    logger.http(message.substring(0, message.lastIndexOf('\n'))),
}

const registerGraphQLToken = () => {
  morgan.token('graphql-query', (req: Request) => {
    return `GraphQL ${req.body.query}`
  })
}

registerGraphQLToken()
const morganMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms\n:graphql-query',
  { stream: loggerStream, skip: () => !isDevelopment },
)

export default morganMiddleware
