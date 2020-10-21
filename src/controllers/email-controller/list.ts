import express from 'express'

import { mailService } from '../../services'

const list = async (request: express.Request, response: express.Response) => {
  try {
    await mailService.sendMail({
      context: {
        name: 'Test user 1234',
      },
      to: 'testemail555@example.com',
      template: 'test',
      subject: 'Test email',
    })
    response.send('email sent')
  } catch (e) {
    response.send(e)
  }
}

export default list
