const mongoose = require('mongoose')
const Product = require('../models/product')
const helper = require('./test-helper')
const app = require('../app')
const supertest = require('supertest')
const api = supertest(app)

beforeEach(async () => {
  await Product.deleteMany({})

  for (let product of helper.productsList) {
    const productObject = new Product(product)
    await productObject.save()
  }
})


describe('when there are initially some products', () => {
  test('products are returned as JSON', async () => {
    await api.get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
  })

  test('all products are returned', async () => {
    const response = await api.get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    expect(response.body).toHaveLength(helper.productsList.length)
  })

  test('a specific product is among the products that are returned', async () => {
    const response = await api.get('/api/products')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    const titles = response.body.map(t => t.title)
    expect(titles).toContain(helper.productsList[0].title)
  })
})


afterAll(async () => {
  await mongoose.connection.close()
})
