import request from 'supertest'

import app from '../../app'
import { databaseConnection } from '../../config'
import { userService } from '../../services'

const query = `
  {
    users {
      name
    }
  }
`

describe('User list', () => {
  beforeAll(async () => {
    await databaseConnection.create()
  })

  afterAll(async () => {
    await databaseConnection.close()
  })

  beforeEach(async () => {
    await databaseConnection.clear()
  })

  it('returns all the users if exist', async (done) => {
    await userService.createUser({ name: 'Foo Bar', email: 'foo@bar.com' })
    await userService.createUser({ name: 'Bar Foo', email: 'bar@foo.com' })

    request(app)
      .post('/graphql')
      .send({ query })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.users).toEqual([
          { name: 'Foo Bar' },
          { name: 'Bar Foo' },
        ])
        done()
      })
  })

  it('returns an empty array if there are no users', (done) => {
    request(app)
      .post('/graphql')
      .send({ query })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.users).toHaveLength(0)
        done()
      })
  })
})
