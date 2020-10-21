import { Attachment } from 'nodemailer/lib/mailer'

export interface SendMail {
  context?: {}
  to: string
  template: string
  subject: string
  attachments?: Attachment[]
}
