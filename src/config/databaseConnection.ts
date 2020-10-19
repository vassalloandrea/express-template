import { createConnection } from 'typeorm'

const create = () =>
  new Promise((resolve) => {
    createConnection()
      .then(() => {
        console.log('The database is connected')
        resolve()
      })
      .catch((error) => console.error(error))
  })

const databaseConnection = {
  create,
}

export default databaseConnection
