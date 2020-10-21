import express from 'express'

import { Action, Route } from './types'

const method = (action: Action): keyof express.Application => {
  let method

  if (action === Action.CREATE) method = 'post'
  else if (action === Action.LIST || action === Action.SHOW) method = 'get'
  else if (action === Action.UPDATE) method = 'put'
  else if (action === Action.DESTROY) method = 'delete'

  return method as keyof express.Application
}

const DEFAULT_ACTIONS: Array<Action> = [
  Action.LIST,
  Action.SHOW,
  Action.CREATE,
  Action.UPDATE,
  Action.DESTROY,
]

const routes: Array<Route> = [
  {
    name: 'users',
    only: [Action.CREATE],
  },
  {
    name: 'email',
    only: [Action.LIST],
  },
]

const router = {
  routes,
  method,
  DEFAULT_ACTIONS,
}

export default router
