const createProductsRoute = require('./product/create-products')
const listProductsRoute = require('./product/list-products')

const root = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
    res.json({ message: 'Example API.' })
  })
}

const setupProductRoutes = (app, container) => {
  createProductsRoute(app, container)
  listProductsRoute(app, container)
}

module.exports = (app, container) => {
  root(app)
  setupProductRoutes(app, container)
}
