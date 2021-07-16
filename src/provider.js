/* eslint-disable class-methods-use-this */
const databaseAdapter = require('./adapters/database')
const ProductController = require('./controller/product')
const ProductRepository = require('./repository/product')

class ServiceProvider {
  register (container) {
    container.register('productRepository', this.buildProductRepository)
    container.register('productController', this.buildProductController)
  }

  buildProductRepository (container) {
    return new ProductRepository(databaseAdapter)
  }

  buildProductController (container) {
    return new ProductController(container.get('productRepository'))
  }
}

module.exports = ServiceProvider
