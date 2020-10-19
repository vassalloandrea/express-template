import express from 'express'

const create = async (req: express.Request, res: express.Response) => {
  res.send({
    _id: 1,
    name: 'Andrea',
  })
}

export default create
