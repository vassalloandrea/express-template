import mailer from './mailer'
import { logger } from '.'
import { nodeMailerTransporter } from '../config'
import { mailerFromEmail } from '../envs'

describe('Mailer', () => {
  const options = {
    to: 'foo@bar.com',
    template: 'test',
    subject: 'Test',
  }

  describe('sendMail', () => {
    it('calls the transporter sendMail method', async (done) => {
      const createSendMailMock = jest.spyOn(nodeMailerTransporter, 'sendMail')
      await mailer.sendMail(options)

      expect(createSendMailMock).toHaveBeenCalledWith({
        from: mailerFromEmail,
        ...options,
      })
      done()
    })

    it('logs the error if the sendMail fails', async (done) => {
      const createLoggerMock = jest.spyOn(logger, 'error')
      await mailer.sendMail(options)

      expect(createLoggerMock).toHaveBeenCalled()
      done()
    })
  })
})
