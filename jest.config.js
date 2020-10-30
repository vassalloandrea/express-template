module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['ormconfig.ts', 'src/envs.ts', 'src/config'],
}
