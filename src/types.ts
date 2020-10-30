import { IncomingMessage } from 'http'
import { Attachment } from 'nodemailer/lib/mailer'

export interface MailArgs {
  context?: {}
  to: string
  template: string
  subject: string
  attachments?: Attachment[]
}

export interface Request extends IncomingMessage {
  body: {
    query: String
  }
}
