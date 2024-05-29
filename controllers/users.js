const express = require('express')
const usersRouter = express.Router()

const User = require('../models/user')

usersRouter.get('/', async (request, response, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
})

module.exports = usersRouter