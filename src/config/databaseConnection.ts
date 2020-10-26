import {
  ConnectionOptions,
  createConnection,
  getConnection,
  getConnectionOptions,
} from 'typeorm'

import { dbUsername, dbPassword, dbName, isDevelopment, env } from '../dotenv'
import { logger } from '../lib'

const options = async (): Promise<ConnectionOptions> => {
  if (dbName === '') {
    logger.error("The database name wasn't provided")
    process.exit(1)
  }

  const defaultOptions = await getConnectionOptions()
  const applicationOptions = {
    username: dbUsername,
    password: dbPassword,
    database: `${dbName}_${env}`,
    logging: isDevelopment,
  }

  return {
    ...defaultOptions,
    ...applicationOptions,
  } as ConnectionOptions
}

const create = async () => {
  try {
    await createConnection(await options())
    logger.info('The database is connected')
  } catch (error) {
    logger.error(error)
  }
}

const clear = async () => {
  const connection = getConnection()
  const entities = connection.entityMetadatas

  await Promise.all(
    entities.map(async (entity) => {
      const repository = connection.getRepository(entity.name)
      try {
        await repository.clear()
      } catch (error) {}
    }),
  )

  logger.info('The database is wiped')
}

const close = async () => await getConnection().close()

const databaseConnection = {
  create,
  clear,
  close,
}

export default databaseConnection
