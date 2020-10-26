import { CreateUserInput } from '../../inputs'
import { mailer } from '../../lib'
import { User } from '../../models/user'

const CreateUser = async (data: CreateUserInput) => {
  const user = User.create(data)
  await user.save()

  mailer.sendMail({
    subject: 'Welcome to express template',
    to: user.email,
    template: 'auth/welcome',
    context: {
      name: user.name,
    },
  })

  return user
}

export default CreateUser
