import dotenv from 'dotenv'

const loadENVariables = (isDevelopment: Boolean) => {
  const dotenvConfiguration = dotenv.config()

  if (dotenvConfiguration.error && isDevelopment) {
    throw dotenvConfiguration.error
  } else {
    console.log('The env variables were loaded!')
  }
}

export default loadENVariables
