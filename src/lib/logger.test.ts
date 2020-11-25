import winstonInstance from 'winston'

let formatReturnValue: Function

jest.mock('winston', () => ({
  addColors: jest.fn(),
  format: {
    combine: jest.fn(),
    timestamp: jest.fn(),
    colorize: jest.fn(),
    printf: jest.fn().mockImplementation((info) => {
      formatReturnValue = info
    }),
  },
  createLogger: jest.fn().mockReturnValue({
    info: jest.fn(),
  }),
  transports: {
    Console: jest.fn(),
    File: jest.fn(),
  },
}))

let winston: typeof winstonInstance

describe('Logger', () => {
  beforeEach(() => {
    jest.resetModules()
    winston = require('winston')
  })

  it('calls the format', () => {
    const info = {
      timestamp: 123,
      level: 'info',
      message: 'This is a message',
    }

    const logger = require('./logger').default
    logger.info('Testing the logger')

    expect(formatReturnValue(info)).toBe(
      `${info.timestamp} ${info.level}: ${info.message}`,
    )
  })

  describe('when the NODE_ENV is not development', () => {
    it('creates the logger with the warn level', () => {
      process.env.NODE_ENV = 'production'

      const createLoggerMock = jest.spyOn(winston, 'createLogger')
      const logger = require('./logger').default
      logger.info('Testing the logger')

      expect(createLoggerMock).toHaveBeenCalledWith(
        expect.objectContaining({ level: 'warn' }),
      )
    })
  })

  describe('when the NODE_ENV is development', () => {
    it('creates the logger with the debug level', () => {
      process.env.NODE_ENV = 'development'

      const createLoggerMock = jest.spyOn(winston, 'createLogger')
      const logger = require('./logger').default
      logger.info('Testing the logger')

      expect(createLoggerMock).toHaveBeenCalledWith(
        expect.objectContaining({ level: 'debug' }),
      )
    })
  })

  describe('when the NODE_ENV is not set', () => {
    it('creates the logger with the debug level', () => {
      process.env.NODE_ENV = ''

      const createLoggerMock = jest.spyOn(winston, 'createLogger')
      const logger = require('./logger').default
      logger.info('Testing the logger')

      expect(createLoggerMock).toHaveBeenCalledWith(
        expect.objectContaining({ level: 'debug' }),
      )
    })
  })
})
