import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const dotenvConfiguration = dotenv.config()
if (process.env.NODE_ENV !== 'production' && dotenvConfiguration.error) {
  throw new Error('Could not find .env file')
}
