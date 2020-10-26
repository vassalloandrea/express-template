module.exports = {
  type: 'mongodb',
  synchronize: false,
  useUnifiedTopology: true,
  entities: ['./src/models/**/*.ts'],
}
