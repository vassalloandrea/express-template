// Process
const env = process.env.NODE_ENV || 'development'
const isDevelopment = (process.env.NODE_ENV || 'development') === 'development'
const appUrl: string = process.env.APP_URL || 'localhost'
const port: number = parseInt(process.env.PORT || '3000', 10)

// Database
const dbUsername: string = process.env.DB_USERNAME || ''
const dbPassword: string = process.env.DB_PASSWORD || ''
const dbName: string = process.env.DB_NAME || ''

// NodeMailer
const mailer = {
  host: process.env.SMTP_HOST || '',
  port: Number(process.env.SMTP_PORT) || 2525,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
}
const fromEmail: string = process.env.FROM_EMAIL || ''

export {
  env,
  isDevelopment,
  appUrl,
  port,
  dbUsername,
  dbPassword,
  dbName,
  mailer,
  fromEmail,
}
