import express from 'express'
import { productController } from './product.controll'

const router = express.Router()

// Create email into NewsLatter
router.post('/', productController.createProduct)

// Get Single Product
router.get('/get-all-products/:id', productController.getSingleProduct)

// Get All Products
router.get('/get-all-products', productController.getAllProducts)

export const productsRoute = router
