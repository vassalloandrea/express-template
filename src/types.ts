import { Attachment } from 'nodemailer/lib/mailer'

export interface MailArgs {
  context?: {}
  to: string
  template: string
  subject: string
  attachments?: Attachment[]
}
