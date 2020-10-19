import express from 'express'
import bodyParser from 'body-parser'

require('./config')

import router from './router'

const app = express()
app.use(bodyParser.json())

router.routes.forEach((route) => {
  ;(route.only || router.DEFAULT_ACTIONS).forEach((action) => {
    const handler = require('./controllers')[`${route.name}Controller`][action]

    app[router.method(action)](`/${route.name}`, handler)
  })
})

export default app
