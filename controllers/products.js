const express = require('express')
const productsRouter = express.Router()

const Product = require('../models/product')

productsRouter.get('/', async (request, response, next) => {
  try {
    const products = await Product.find({})
    response.send(products)
  } catch (error) {
    next(error)
  }
})

// productsRouter.get('/', async (request, response, next) => {
//   try {

//   } catch (error) {
//     next(error)
//   }
// })

module.exports = productsRouter