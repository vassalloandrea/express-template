import { InputType, Field } from 'type-graphql'
import { MinLength, IsEmail } from 'class-validator'

@InputType()
class CreateUserInput {
  @Field()
  @MinLength(3)
  name: string

  @Field()
  @IsEmail()
  email: string
}

export default CreateUserInput
