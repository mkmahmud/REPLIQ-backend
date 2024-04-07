import express from 'express'
import { AuthController } from './auth.controller'
import validateRequest from '../../middlewares/validateRequest'
import { AuthValidation } from './auth.validation'
const router = express.Router()

// Log In and get access token and refresh token
router.post('/login', AuthController.loginUser)

// Get Refresh Token
router.post('/refresh-token', AuthController.refreshToken)

export const AuthRoutes = router
