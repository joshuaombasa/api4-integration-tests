const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const { requestLogger, unknownEndpointHandler, errorHandler } = require('./utils/middleware')

const app = express()

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('connected to mongodb'))
  .catch(error => console.log(error))

app.use(express.json())
app.use(cors())

app.use(requestLogger)
app.use(unknownEndpointHandler)
app.use(errorHandler)

module.exports = app

