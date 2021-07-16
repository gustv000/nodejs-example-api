/* eslint-disable no-param-reassign */
const winston = require('winston')
const { format } = require('winston')

const { combine, timestamp } = format

const logger = winston.createLogger({
  format: combine(
    timestamp(),
    format.json()
  ),
  transports: [new winston.transports.Console()]
})

module.exports = logger
