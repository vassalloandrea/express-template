import express from 'express'
import bodyParser from 'body-parser'

import { apolloConnection } from './config'

const app = express()

app.use(bodyParser.json())
apolloConnection(app)

export default app
