/* eslint-disable no-unused-expressions */

const { expect } = require('chai')
const { ServiceNotRegisteredError, KeyAlreadyRegisteredError } = require('../../../src/infra/ioc/exceptions')
const Container = require('../../../src/infra/ioc/container')

describe('Container', () => {
  describe('#register()', () => {
    it('should register new factory to the container', () => {
      const container = new Container()
      const buildFakeFactory = () => 'fakeFactoryReturn'
      container.register('fakeFactory', buildFakeFactory)

      const fakeFactory = container.get('fakeFactory')

      expect(fakeFactory).to.be.equal('fakeFactoryReturn')
      expect(container.factories.fakeFactory).to.be.equal(buildFakeFactory)
      expect(container.instances.fakeFactory).to.be.equal(fakeFactory)
    })

    it('should throw error when register existent factory', () => {
      const container = new Container()
      const buildFakeFactory = () => 'fakeFactoryReturn'
      container.factories.fakeFactory = buildFakeFactory

      expect(container.register.bind(container, 'fakeFactory', buildFakeFactory))
        .to
        .throw(KeyAlreadyRegisteredError)
    })
  })

  describe('#get()', () => {
    it('should get the initialized instance', () => {
      const container = new Container()
      container.instances.fakeFactory = 'fakeFactoryReturn'
      const fakeFactory = container.get('fakeFactory')
      expect(fakeFactory).to.be.equal('fakeFactoryReturn')
    })

    it('should throw error when the factory is not registered', () => {
      const container = new Container()
      expect(container.get.bind(container, 'fakeFactory'))
        .to
        .throw(ServiceNotRegisteredError)
    })

    it('should initialize the instance before return', () => {
      const container = new Container()
      const buildFakeFactory = () => 'fakeFactoryReturn'
      container.factories.fakeFactory = buildFakeFactory
      const fakeFactory = container.get('fakeFactory')

      expect(fakeFactory).to.be.equal('fakeFactoryReturn')
      expect(container.factories.fakeFactory).to.be.equal(buildFakeFactory)
      expect(container.instances.fakeFactory).to.be.equal(fakeFactory)
    })
  })
})
