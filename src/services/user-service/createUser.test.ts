import { userService } from '..'

import { databaseConnection } from '../../config'
import { CreateUserInput } from '../../inputs'
import { User } from '../../models/user'

describe('Create user service', () => {
  beforeAll(async () => {
    await databaseConnection.create()
  })

  afterAll(async () => {
    await databaseConnection.close()
  })

  beforeEach(async () => {
    await databaseConnection.clear()
  })

  it('creates the user if the passed data are correct', async (done) => {
    const data: CreateUserInput = {
      name: 'Foo Bar',
      email: 'foo@bar.com',
    }

    const user = await userService.createUser(data)
    expect(user).toBeInstanceOf(User)
    expect(user.name).toBe('Foo Bar')
    done()
  })
})
