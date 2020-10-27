import { transporter } from '../config'
import { mailerFromEmail } from '../dotenv'
import { MailArgs } from '../types'
import logger from './logger'

const sendMail = (config: MailArgs) => {
  const mailInfo = {
    from: mailerFromEmail,
    ...config,
  }

  transporter.sendMail(mailInfo, (error, _info) => error && logger.info(error))
}

const mailer = {
  sendMail,
}

export default mailer
