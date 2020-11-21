const mailer = {
  sendMail: jest.fn(),
}

const logger = {
  info: jest.fn(),
  error: jest.fn(),
}

export { mailer, logger }
