import winston from 'winston'

import { logger } from '.'

jest.mock('winston', () => ({
  addColors: jest.fn(),
  format: {
    combine: jest.fn(),
    timestamp: jest.fn(),
    colorize: jest.fn(),
    printf: jest.fn(),
  },
  createLogger: jest.fn().mockReturnValue({
    info: jest.fn(),
  }),
  transports: {
    Console: jest.fn(),
    File: jest.fn(),
  },
}))

describe('Logger', () => {
  afterAll(() => {
    process.env.NODE_ENV = 'test'
  })

  // describe('when the NODE_ENV is not development', () => {
  //   it('creates the logger with the warn level', () => {
  //     jest.resetModules()
  //     process.env.NODE_ENV = 'production'

  //     const createLoggerMock = jest.spyOn(winston, 'createLogger')
  //     logger.info('Testing the logger')

  //     expect(createLoggerMock).toHaveBeenCalledWith(
  //       expect.objectContaining({ level: 'warn' }),
  //     )
  //   })
  // })

  describe('when the NODE_ENV is development', () => {
    it('creates the logger with the debug level', () => {
      jest.resetModules()
      process.env.NODE_ENV = 'development'

      const logger = require('.').logger
      const createLoggerMock = jest.spyOn(winston, 'createLogger')
      logger.info('Testing the logger')

      expect(createLoggerMock).toHaveBeenCalledWith(
        expect.objectContaining({ level: 'debug' }),
      )
    })
  })
})
