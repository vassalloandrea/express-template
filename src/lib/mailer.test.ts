import { mailer } from '.'
import { nodeMailerTransporter } from '../config'
import { mailerFromEmail } from '../envs'

jest.mock('nodemailer', () => ({
  createTransport: jest.fn().mockReturnValue({
    use: jest.fn(),
    sendMail: jest.fn(),
  }),
}))

describe('Mailer', () => {
  describe('sendMail', () => {
    it('calls the transporter sendMail method', () => {
      const createSendMailMock = jest.spyOn(nodeMailerTransporter, 'sendMail')
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
