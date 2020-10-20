import app from './app'
import databaseConnection from './config/databaseConnection'
import { appUrl, port } from './config/dotenv'
import apolloConnection from './libs/apolloConnection'

databaseConnection.create().then(() => {
  apolloConnection(app)

  app.listen(port, () => {
    console.log(`The server is up and running here: http://${appUrl}:${port}`)
  })
})
