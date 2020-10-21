import nodemailer from 'nodemailer'
import { fromEmail, mailer } from '../../config/dotenv'

const sendMail = async () => {
  const transporter = nodemailer.createTransport(mailer)

  const mailInfo = {
    from: fromEmail,
    to: 'testemail555@example.com',
    subject: 'Test email',
    text: 'Sending test email',
  }

  await transporter.sendMail(mailInfo)
}

export default sendMail
