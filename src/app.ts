import express from 'express'
import bodyParser from 'body-parser'

require('./config')

const app = express()
app.use(bodyParser.json())

export default app
