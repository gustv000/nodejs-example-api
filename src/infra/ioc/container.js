const { ServiceNotRegisteredError, KeyAlreadyRegisteredError } = require('./exceptions')

class Container {
  constructor () {
    this.factories = {}
    this.instances = {}
  }

  get (key) {
    if (key in this.instances) {
      return this.instances[key]
    }

    if (!(key in this.factories)) {
      throw new ServiceNotRegisteredError(`Service ${key} is not registered`)
    }

    this.instances[key] = this.factories[key](this)
    return this.instances[key]
  }

  register (key, factory) {
    if (key in this.factories) {
      throw new KeyAlreadyRegisteredError(`Given key ${key} already registered`)
    }
    this.factories[key] = factory
  }
}

module.exports = Container
