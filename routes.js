const express = require('express')
const router = express.Router()
const controller = require('./controllers')


router.get('/getProducts',controller.getAllProducts)
router.post('/createProducts',controller.createProduct)
router.put('/updateProducts',controller.updateProduct)

module.exports = router;