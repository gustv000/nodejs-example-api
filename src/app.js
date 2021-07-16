require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('./adapters/logger')
const routesSetup = require('./api/setup')
const buildContainer = require('./deps')

app.use(express.json())

const container = buildContainer()

routesSetup(app, container)

app.listen(process.env.PORT || 80, () => {
  logger.info(`Listening at ${process.env.PORT || 80}`)
})
