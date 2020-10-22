import dotenv from 'dotenv'

const loadENVariables = () => {
  const dotenvConfiguration = dotenv.config()

  if (dotenvConfiguration.error) {
    throw dotenvConfiguration.error
  } else {
    console.log('The env variables were loaded!')
  }
}

export default loadENVariables
