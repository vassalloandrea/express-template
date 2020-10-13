import express from 'express'

// Load the project vendors dependecies
import './config'

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to express')
})

export default app
