import { Resolver, Query, Arg, Mutation } from 'type-graphql'

import { User } from '../models/user'
import { CreateUserInput } from '../inputs'
import { userService } from '../services'

@Resolver(User)
export class UserResolver {
  @Mutation(() => User)
  async createUser(@Arg('data') data: CreateUserInput) {
    const user = userService.createUser(data).then((user) => user)
    return user
  }

  @Query(() => [User])
  users() {
    return User.find({})
  }
}
