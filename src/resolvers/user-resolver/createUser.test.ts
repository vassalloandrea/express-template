import request from 'supertest'

import app from '../../app'
import { databaseConnection } from '../../config'
import { CreateUserInput } from '../../inputs'

const query = (data: CreateUserInput) => `
  mutation {
    createUser (
      data: {
        name: "${data.name}"
      }
    ) {
      name
    }
  }
`

describe('Create user', () => {
  beforeAll(async () => {
    await databaseConnection.create()
  })

  afterAll(async () => {
    await databaseConnection.close()
  })

  beforeEach(async () => {
    await databaseConnection.clear()
  })

  it('creates the user if the data are correct', (done) => {
    const data: CreateUserInput = { name: 'Foo Bar' }

    request(app)
      .post('/graphql')
      .send({ query: query(data) })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.data.createUser).toEqual({
          name: 'Foo Bar',
        })
        done()
      })
  })

  it('returns the errors when the data are incorrect', (done) => {
    const data: CreateUserInput = { name: '' }

    request(app)
      .post('/graphql')
      .send({ query: query(data) })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.text).toContain(
          'name must be longer than or equal to 3 characters',
        )
        done()
      })
  })
})
