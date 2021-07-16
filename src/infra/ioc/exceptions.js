/* eslint-disable max-classes-per-file */

class ServiceNotRegisteredError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.isSleepy = true
  }
}

class KeyAlreadyRegisteredError extends Error {
  constructor (message) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
    this.isSleepy = true
  }
}

module.exports = {
  ServiceNotRegisteredError,
  KeyAlreadyRegisteredError
}
