import nodemailer from 'nodemailer'

const hbs = require('nodemailer-express-handlebars')

import {
  mailerHost,
  mailerPassword,
  mailerPort,
  mailerUsername,
} from '../dotenv'

const mailer = {
  host: mailerHost,
  port: mailerPort,
  auth: {
    user: mailerUsername,
    pass: mailerPassword,
  },
}

const handleBarsConfig = {
  viewEngine: {
    partialsDir: 'src/views/partials',
    layoutsDir: 'src/views/layouts',
    extname: '.hbs',
  },
  extName: '.hbs',
  viewPath: 'src/views',
}

const transporter = nodemailer.createTransport(mailer)
transporter.use('compile', hbs(handleBarsConfig))

export default transporter
