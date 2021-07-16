const { expect } = require('chai')
const sinon = require('sinon')
const ProductRepository = require('../../src/repository/product')
const ProductController = require('../../src/controller/product')

describe('ProductController', () => {
  let repositoryMock

  beforeEach(() => {
    repositoryMock = new ProductRepository('mock database')
  })

  describe('#createMultiple', () => {
    it('should call repository expected times', () => {
      const repositoryStub = sinon.stub(repositoryMock, 'create').resolves(true)
      const controller = new ProductController(repositoryMock)

      const products = [
        { name: 'Test 1' },
        { name: 'Test 2' },
        { name: 'Test 3' }
      ]

      controller.createMultiple(products)

      sinon.assert.callCount(repositoryStub, 3)
      sinon.assert.calledWith(repositoryStub.firstCall, { name: 'Test 1' })
      sinon.assert.calledWith(repositoryStub.secondCall, { name: 'Test 2' })
      sinon.assert.calledWith(repositoryStub.thirdCall, { name: 'Test 3' })
    })
  })

  describe('#getAll', () => {
    it('should return expected products', async () => {
      const productsMock = [{ name: 'Test 1' }, { name: 'Test 2' }]
      const repositoryStub = sinon.stub(repositoryMock, 'getAll').resolves(productsMock)
      const controller = new ProductController(repositoryMock)

      const result = await controller.getAll()

      sinon.assert.calledOnce(repositoryStub)
      expect(result).to.be.equal(productsMock)
    })
  })
})
