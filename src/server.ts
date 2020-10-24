import app from './app'
import { logger } from './lib'

import { databaseConnection } from './config'
import { appUrl, port } from './config/dotenv'

databaseConnection.create().then(() => {
  app.listen(port, () => {
    logger.info(`The server is up and running here: http://${appUrl}:${port}`)
  })
})

export default app
