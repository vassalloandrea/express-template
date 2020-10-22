module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: ['tests/**/*.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
