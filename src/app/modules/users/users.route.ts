import express from 'express'
import { usersController } from './users.controller'

const router = express.Router()

// Create User

router.post('/create', usersController.createUser)

// Get Users
router.get('/', usersController.getAllUsers)

// Get Single Users
router.get('/:id', usersController.getSingleUser)

export const UserRoutes = router
