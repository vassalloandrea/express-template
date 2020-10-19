import dotenv from 'dotenv'

// Configure dotenv
const dotenvConfiguration = dotenv.config()
if (dotenvConfiguration.error) {
  throw dotenvConfiguration.error
}
