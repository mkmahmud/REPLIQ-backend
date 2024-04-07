import { Schema, model } from 'mongoose'
import { IUsers, UsersModel } from './users.interface'
import bcrypt from 'bcrypt'

// User Modal
const usersSchema = new Schema<IUsers, UsersModel>(
  {
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
)

// Check user exists
usersSchema.statics.isUserExist = async function (
  number: string,
): Promise<IUsers | null> {
  return await Users.findOne(
    { phoneNumber: number },
    { email: 1, password: 1, fullName: 1, phoneNumber: 1, role: 1 },
  )
}

// Check user password
usersSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword)
}

export const Users = model<IUsers, UsersModel>('users', usersSchema)
