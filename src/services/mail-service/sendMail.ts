import nodemailer from 'nodemailer'
import appRoot from 'app-root-path'
import { fromEmail, mailer } from '../../config/dotenv'

// Unfortunately there isn't declaration file for these libraries
// However we can create one ourselves
const hbs = require('nodemailer-express-handlebars')

const sendMail = async () => {
  const transporter = nodemailer.createTransport(mailer)

  console.log(`${appRoot.resolve('/src/views/partials')}`)

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
    to: 'testemail555@example.com',
    subject: 'Test email',
    template: 'test',
    context: {
      name: 'Test user 1234',
    },
  }

  await transporter.sendMail(mailInfo)
}

export default sendMail
