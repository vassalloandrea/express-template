module.exports = {
  type: 'mongodb',
  synchronize: true,
  useUnifiedTopology: true,
  entities: ['./src/models/**/*.ts'],
}
