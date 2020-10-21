import nodemailer from 'nodemailer'
import appRoot from 'app-root-path'
import { fromEmail, mailer } from '../../config/dotenv'
import { SendMail } from './type'

// Unfortunately there isn't declaration file for this library
// However we can create one ourselves
const hbs = require('nodemailer-express-handlebars')

const sendMail = async (mailerOptions: SendMail) => {
  const { context, to, template, subject, attachments } = mailerOptions

  const transporter = nodemailer.createTransport(mailer)

  const options = {
    viewEngine: {
      partialsDir: `${appRoot.resolve('/src/views/partials')}`,
      layoutsDir: `${appRoot.resolve('/src/views/layouts')}`,
      extname: '.hbs',
    },
    extName: '.hbs',
    viewPath: 'src/views',
  }

  transporter.use('compile', hbs(options))

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
