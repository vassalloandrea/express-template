import { NonEmptyArray } from 'type-graphql'

import UserResolver from './user-resolver'

const resolvers: NonEmptyArray<Function> = [UserResolver]

export default resolvers
