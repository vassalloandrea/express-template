import express from 'express'
import bodyParser from 'body-parser'

import { apolloConnection, morganMiddleware } from './config'

const app = express()

app.use(bodyParser.json())
app.use(morganMiddleware)
apolloConnection(app)

export default app
