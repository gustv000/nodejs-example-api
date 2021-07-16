const logger = require('../adapters/logger')

class ProductRepository {
  constructor (databaseAdapter) {
    this.databaseAdapter = databaseAdapter
  }

  create (product) {
    const query = this.databaseAdapter.query(
      'INSERT INTO products SET ?',
      product,
      function (error, results, fields) {
        if (error) throw error
      }
    )

    logger.info(query)
  }

  getAll () {
    return new Promise((resolve, reject) => {
      const query = this.databaseAdapter.query(
        'SELECT * FROM products ORDER BY id DESC',
        function (error, results, fields) {
          if (error) {
            return reject(error)
          }

          resolve(results)
        }
      )

      logger.info(query)
    })
  }
}

module.exports = ProductRepository
