import { InputType, Field } from 'type-graphql'

@InputType()
class CreateUserInput {
  @Field()
  name: string
}

export default CreateUserInput
