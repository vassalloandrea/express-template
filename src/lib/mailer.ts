import { nodeMailerTransporter } from '../config'
import { mailerFromEmail } from '../envs'
import { MailArgs } from '../types'
import { logger } from '.'

const sendMail = async (config: MailArgs) => {
  const mailInfo = {
    from: mailerFromEmail,
    ...config,
  }

  try {
    await nodeMailerTransporter.sendMail(mailInfo)
  } catch (error) {
    logger.error(error)
  }
}

const mailer = {
  sendMail,
}

export default mailer
