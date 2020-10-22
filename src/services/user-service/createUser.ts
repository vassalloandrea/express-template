import { CreateUserInput } from '../../inputs'
import { User } from '../../models/user'

const CreateUser = async (data: CreateUserInput) => {
  const user = User.create(data)
  await user.save()
  return user
}

export default CreateUser
