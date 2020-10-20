import { CreateUserInput } from '../../inputs'
import { User } from '../../models/user'

const CreateUser = async (data: CreateUserInput) =>
  new Promise((resolve) => {
    const user = User.create(data)
    user.save().then(() => resolve(user))
  })

export default CreateUser
