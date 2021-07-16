class ProductController {
  constructor (productRepository) {
    this.productRepository = productRepository
  }

  createMultiple (products) {
    for (const key in products) {
      this.productRepository.create(products[key])
    }
  }

  async getAll () {
    const products = await this.productRepository.getAll()
    return products
  }
}

module.exports = ProductController
