import { createConnection, getConnection } from 'typeorm'

const create = async () => {
  try {
    await createConnection()
    console.log('The database is connected')
  } catch (error) {
    console.error(error)
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

  console.log('The database is wiped')
}

const close = async () => await getConnection().close()

const databaseConnection = {
  create,
  clear,
  close,
}

export default databaseConnection
