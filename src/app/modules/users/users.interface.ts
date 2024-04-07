import { Model } from 'mongoose'

export interface IUsers {
  fullName: string
  phoneNumber: string
  email: string
  role: string
  password: string
}

export type UsersModel = {
  isUserExist(
    phoneNumber: string,
  ): Promise<Pick<IUsers, 'phoneNumber' | 'password' | 'email' | 'role'>>
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>
} & Model<IUsers>
