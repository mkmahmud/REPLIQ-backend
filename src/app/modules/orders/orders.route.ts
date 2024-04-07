import express from 'express'
import { orderController } from './orders.controller'
const router = express.Router()

// Create orders
router.post('/', orderController.createOrder)

// Get Single Order details
router.get('/get-all-orders/:id', orderController.getSingleOrders)

// Get All Products
router.get('/get-all-orders', orderController.getAllOrders)

export const ordersRoute = router
