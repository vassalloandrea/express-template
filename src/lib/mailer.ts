import { transporter } from '../config'
import { mailerFromEmail } from '../dotenv'
import { MailArgs } from '../types'

const sendMail = (config: MailArgs) => {
  const mailInfo = {
    from: mailerFromEmail,
    ...config,
  }

  transporter.sendMail(mailInfo)
}

const mailer = {
  sendMail,
}

export default mailer
