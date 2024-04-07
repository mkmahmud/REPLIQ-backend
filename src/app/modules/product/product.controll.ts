import { Request, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import { productsService } from './product.service'

// Create Course
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const data = req.body
  const result = await productsService.createProduct(data)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Added Successfully',
    data: result,
  })
})

// Get All Products
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await productsService.getAllProducts()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products Data Retived Successfully',
    data: result,
  })
})

// Get All Products
const getSingleProduct = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await productsService.getSingleProduct(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product Data Retived Successfully',
    data: result,
  })
})

// Export functions
export const productController = {
  createProduct,
  getAllProducts,
  getSingleProduct,
}
