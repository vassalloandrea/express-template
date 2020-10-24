import dotenv from 'dotenv'

import { logger } from '../lib'

const loadENVariables = () => {
  const dotenvConfiguration = dotenv.config()

  if (dotenvConfiguration.error) {
    logger.error(dotenvConfiguration.error)
  } else {
    logger.info('The env variables were loaded!')
  }
}

export default loadENVariables
