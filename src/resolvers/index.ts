import { NonEmptyArray } from 'type-graphql'
import { UserResolver } from './userResolver'

const resolvers: NonEmptyArray<Function> = [UserResolver]

export default resolvers
