import { IUsers } from './users.interface'
import { Users } from './users.model'
import bcrypt from 'bcrypt'

// Create User
const createUser = async (data: IUsers): Promise<IUsers | null | object> => {
  try {
    // check if user already exists
    const isExist = await Users.findOne({ email: data.email })
    if (isExist) {
      return { message: 'user already exists' }
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)
    // Update password
    data.password = hashedPassword

    // Set Role
    data.role = 'user'

    // Create User
    await Users.create(data)
    return { message: 'Success' }
  } catch (error) {
    // Handle the error, e.g., log it or throw a custom error
    console.error('Error creating user:', error)
    throw new Error('Error creating user')
  }
}

// Get Users
const getAllUsers = async () => {
  const res = await Users.find({}).select('-password')
  return res
}

// Get Single users
const getSingleUser = async (id: string) => {
  const res = await Users.findById(id).select('-password')
  return res
}

export const usersService = {
  createUser,
  getAllUsers,
  getSingleUser,
}
