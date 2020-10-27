import { mailer } from '.'
import { transporter } from '../config'
import { mailerFromEmail } from '../dotenv'

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    use: jest.fn(),
    sendMail: jest.fn(),
  }),
}))

describe('Mailer', () => {
  describe('sendMail', () => {
    it('calls the transporter sendMail method', () => {
      const createSendMailMock = jest.spyOn(transporter, 'sendMail')
      const options = {
        to: 'foo@bar.com',
        template: 'test',
        subject: 'Test',
      }
      mailer.sendMail(options)

      expect(createSendMailMock).toHaveBeenCalledWith(
        {
          from: mailerFromEmail,
          ...options,
        },
        expect.any(Function),
      )
    })
  })
})
