import nodemailer from 'nodemailer'
import { fromEmail, handleBarsConfig, mailer } from '../../config/dotenv'
import { SendMail } from './type'

// Unfortunately there isn't declaration file for this library
// However we can create one ourselves
const hbs = require('nodemailer-express-handlebars')

const sendMail = async (mailerOptions: SendMail) => {
  const { context, to, template, subject, attachments } = mailerOptions

  const transporter = nodemailer.createTransport(mailer)

  transporter.use('compile', hbs(handleBarsConfig))

  const mailInfo = {
    from: fromEmail,
    to,
    subject,
    template,
    context,
    attachments,
  }

  await transporter.sendMail(mailInfo)
}

export default sendMail
