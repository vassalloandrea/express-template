import { nodeMailerTransporter } from '../config'
import { mailerFromEmail } from '../envs'
import { MailArgs } from '../types'
import logger from './logger'

const sendMail = (config: MailArgs) => {
  const mailInfo = {
    from: mailerFromEmail,
    ...config,
  }

  nodeMailerTransporter.sendMail(
    mailInfo,
    (error, _info) => error && logger.info(error),
  )
}

const mailer = {
  sendMail,
}

export default mailer
