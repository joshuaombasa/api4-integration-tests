const express = require('express')
const productsRouter = express.Router()

const Product = require('../models/product')

productsRouter.get('/', async (request, response, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

module.exports = productsRouter