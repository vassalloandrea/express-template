import express from 'express'

import { mailService } from '../../services'

const list = async (request: express.Request, response: express.Response) => {
  try {
    await mailService.sendMail()
    response.send('email sent')
  } catch (e) {
    response.send(e)
  }
}

export default list
