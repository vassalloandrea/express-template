import { ValidationArguments } from 'class-validator'

import { databaseConnection } from '../config'
import { unique } from '.'
import { User } from '../models/user'

describe('unique validator', () => {
  const uniqueValidator = new unique()

  const args = (property: string = 'email'): ValidationArguments => ({
    value: 'foo@bar.com',
    constraints: [],
    targetName: 'User',
    object: {},
    property,
  })

  describe('defaultMessage', () => {
    it('returns the correct default message', () => {
      expect(uniqueValidator.defaultMessage(args('foo bar'))).toBe(
        'This foo bar already exist!',
      )
    })
  })

  describe('validate', () => {
    beforeAll(async () => {
      await databaseConnection.create()
    })

    afterAll(async () => {
      await databaseConnection.close()
    })

    beforeEach(async () => {
      await databaseConnection.clear()
    })

    it('returns true if the field value does not exist on the database table', async (done) => {
      const validation = await uniqueValidator.validate('', args())
      expect(validation).toBeTruthy()
      done()
    })

    it('returns false if the field value already exist on the database table', async (done) => {
      await User.create({ email: 'foo@bar.com' }).save()

      const validation = await uniqueValidator.validate('', args())
      expect(validation).toBeFalsy()
      done()
    })
  })
})
