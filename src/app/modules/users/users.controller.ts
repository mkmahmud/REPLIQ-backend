import { Request, RequestHandler, Response } from 'express'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { usersService } from './users.service'
import httpStatus from 'http-status'

// Create Student
const createUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body
  const result = await usersService.createUser(body)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User created Successfully',
    data: result,
  })
})

// Create Student
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await usersService.getAllUsers()

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Data Retrived Successfully',
    data: result,
  })
})

// Create Student
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params
  const result = await usersService.getSingleUser(id)

  // Send response
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Data Retrived Successfully',
    data: result,
  })
})

export const usersController = {
  createUser,
  getAllUsers,
  getSingleUser,
}
