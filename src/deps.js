const Container = require('./infra/ioc/container')
const ServiceProvider = require('./provider')

const providers = [
  ServiceProvider
]

function registerProviders (container) {
  providers.forEach((Provider) => {
    const providerInstance = new Provider()
    providerInstance.register(container)
  })
}

function buildContainer () {
  const deps = new Container()
  registerProviders(deps)
  return deps
}

module.exports = buildContainer
