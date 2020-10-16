import request from 'supertest'

import app from './app'

describe('GET /', () => {
  it('returns 200 ok', (done) => {
    request(app).get('/').expect(200, done)
  })

  it('returns Welcome to express', (done) => {
    request(app).get('/').expect('Welcome to express', done)
  })
})
