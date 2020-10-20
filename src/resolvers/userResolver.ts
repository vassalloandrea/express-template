import { Resolver, Query, Arg, Mutation } from 'type-graphql'

import { User } from '../models/user'
import { CreateUserInput } from '../inputs'

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = User.create(data)
    await user.save()
    return user
  }

  @Query(() => [User])
  users() {
    return User.find({})
  }
}
