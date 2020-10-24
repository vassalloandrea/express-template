import { createConnection, getConnection } from 'typeorm'

import { logger } from '../lib'

const create = async () => {
  try {
    await createConnection()
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
