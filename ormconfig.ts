import {
  dbUsername,
  dbPassword,
  dbName,
  isDevelopment,
  env,
} from './src/config/dotenv'

if (dbName === '') {
  console.error("The database name wasn't provided")
  process.exit(1)
}

module.exports = {
  type: 'mongodb',
  username: dbUsername,
  password: dbPassword,
  database: `${dbName}_${env}`,
  synchronize: false,
  logging: isDevelopment,
  useUnifiedTopology: true,
  entities: ['./src/entities/**/*.ts'],
}
