import express from 'express'
import { getMongoManager } from 'typeorm'

import { User } from '../../entities/user'

const CreateUser = async (request: express.Request) =>
  new Promise((resolve) => {
    const user = new User()
    user.name = request.body.name

    getMongoManager()
      .save(user)
      .then(() => resolve(user))
  })

export default CreateUser
