const { expect } = require('chai')
const sinon = require('sinon')
const ProductRepository = require('../../src/repository/product')

describe('#ProductRepository', () => {
  afterEach(() => {
    sinon.restore()
  })

  describe('#create', () => {
    it('should call repository with expected params', () => {
      const databaseAdapterMock = {
        query: sinon.stub().resolves()
      }

      const repository = new ProductRepository(databaseAdapterMock)

      repository.create({ name: 'Test 1' })

      sinon.assert.calledOnce(databaseAdapterMock.query)
      sinon.assert.calledWith(
        databaseAdapterMock.query,
        'INSERT INTO products SET ?',
        { name: 'Test 1' },
        sinon.match.typeOf('function')
      )
    })
  })

  describe('#getAll', () => {
    it('should call database with expected params and return expected products', async () => {
      const expectedProducts = [{ name: 'Test 1' }]

      const databaseAdapterMock = {
        query: sinon.stub().yields(false, expectedProducts)
      }

      const repository = new ProductRepository(databaseAdapterMock)

      const results = await repository.getAll()

      sinon.assert.calledOnce(databaseAdapterMock.query)
      sinon.assert.calledWith(
        databaseAdapterMock.query,
        'SELECT * FROM products ORDER BY id DESC',
        sinon.match.typeOf('function')
      )
      expect(results).to.be.equal(expectedProducts)
    })
  })
})
