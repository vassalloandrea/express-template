import express from 'express'

// Load the project vendors dependecies
import './config'

import { port } from './config/envs'

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to express')
})

app.listen(port, () => {
  console.log(`App is listening to port ${port}`)
})
