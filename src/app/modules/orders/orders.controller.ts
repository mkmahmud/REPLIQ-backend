import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { ordersService } from './orders.service'

// Create Course
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await ordersService.createOrder(data)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order Placed Successfully',
    data: result,
  })
})

// Get All Orders
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await ordersService.getAllOrders()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders Data Retived Successfully',
    data: result,
  })
})

// Get All Orders
const getSingleOrders = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await ordersService.getSingleOrder(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Orders Data Retived Successfully',
    data: result,
  })
})

// Export functions
export const orderController = {
  createOrder,
  getAllOrders,
  getSingleOrders,
}
