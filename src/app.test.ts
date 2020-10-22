import request from 'supertest'
import app from './app'

describe('GraphQL', () => {
  it('returns 400 and must provide query error', (done) => {
    request(app)
      .post('/graphql')
      .send({ query: '' })
      .expect('Content-Type', /html/)
      .expect(400)
      .then((response) => {
        expect(response.text).toBe('Must provide query string.')
        done()
      })
  })
})
