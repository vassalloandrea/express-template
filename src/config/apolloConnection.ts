import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'

import resolvers from '../resolvers'

const apolloConnection = async (app: express.Application) => {
  const schema = await buildSchema({
    resolvers,
  })

  const apolloServer = new ApolloServer({ schema })
  apolloServer.applyMiddleware({ app })
}

export default apolloConnection
