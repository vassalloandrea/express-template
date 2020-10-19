import express from 'express'

require('./config')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to express')
})

export default app
