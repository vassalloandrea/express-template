import { getMongoRepository } from 'typeorm'
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator'

@ValidatorConstraint({ name: 'unique', async: true })
class UniqueValidation implements ValidatorConstraintInterface {
  async validate(text: string, args: ValidationArguments) {
    const fieldRepository = await getMongoRepository(
      args.constraints?.[0] || args.targetName,
    )

    const params: Record<string, string> = {}
    params[args.property] = args.value

    const object = await fieldRepository.findOne(params)
    return object === undefined
  }

  defaultMessage(args: ValidationArguments) {
    return `This ${args.property} already exist!`
  }
}

export default UniqueValidation
