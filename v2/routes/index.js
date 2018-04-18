
'use strict'
const express = require('express')
const api   = express.Router()
const ProductController =require('../controllers/product')
//estas son las funciones de un producto
//GET POST DELETE PUT

//funcion get todos los producto========================================
api.get('/product', ProductController.getProducts)
//funcion encontrar determinado producto====================================
api.get('/product/:productId', ProductController.getProduct)
//peticion de tipo POST dde nuestra API =======================================
api.post('/product',ProductController.saveProduct)
//funcion PuT producto========================================
api.put('/product/:productId', ProductController.updateProduct)
//funcion Delete producto========================================
api.delete('/product/:productId', ProductController.deleteProduct)

module.exports = api
