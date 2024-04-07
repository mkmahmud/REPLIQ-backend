import { Model } from 'mongoose'

export interface IProduct {
  productName: string
  description: string
  price: number
  discountedPrice?: number
  category: string
  brand: string
  images: string[]
  stockQuantity: number
  attributes?: {
    [key: string]: string
  }
  rating?: number
  availability?: boolean
  relatedProducts?: string[]
  tags?: string[]
}

export type ProductModel = Model<IProduct>
