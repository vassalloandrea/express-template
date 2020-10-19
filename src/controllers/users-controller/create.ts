import express from 'express'

import { userService } from '../../services'

const create = async (request: express.Request, response: express.Response) => {
  const user = await userService.createUser(request)
  response.send(user)
}

export default create
