const logger = require('../../adapters/logger')
const validate = require('./schemas/create-products-schema')

module.exports = (app, container) => {
  app.post('/v1/products', (req, res) => {
    try {
      const errors = validate(req.body)

      if (errors !== null) {
        res.status(400)
        return res.json(errors)
      }

      const productController = container.get('productController')
      productController.createMultiple(req.body.products)

      res.status(200)
      res.json({ message: 'Products will be created.' })
    } catch (e) {
      logger.error('[Error] - Create Product', e)
      res.status(500)
      res.json({ message: 'Something went wrong.' })
    }
  })
}
