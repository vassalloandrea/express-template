import request from 'supertest';
import { app } from './app';

let res: any;

describe('GET /', () => {
  beforeEach( async() => {
    res = await request(app).get('/').send()
  })

  it('should send status 200', () => {
    expect(res.status).toEqual(200)
  })

  it('should send Welcome to express', () => {
    expect(res.text).toBe('Welcome to express')
  })
})

