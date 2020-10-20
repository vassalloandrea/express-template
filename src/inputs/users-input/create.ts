import { InputType, Field } from 'type-graphql'
import { MinLength } from 'class-validator'

@InputType()
class CreateUserInput {
  @Field()
  @MinLength(3)
  name: string
}

export default CreateUserInput
