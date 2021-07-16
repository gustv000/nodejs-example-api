const logger = require('../../adapters/logger')

module.exports = (app, container) => {
  app.get('/v1/products', async (req, res) => {
    try {
      const productController = container.get('productController')
      const products = await productController.getAll()

      res.status(200)
      res.json({ products })
    } catch (e) {
      logger.error('[Error] - List Products', e)
      res.status(500)
      res.json({ message: 'Something went wrong.' })
    }
  })
}
