import { IProduct } from './product.interface'
import { Products } from './product.model'

// Create Product
const createProduct = async (data: IProduct): Promise<IProduct> => {
  const res = await Products.create(data)
  return res
}

// Get Products
const getAllProducts = async () => {
  const res = await Products.find({})
  return res
}

// Get Products
const getSingleProduct = async (id: string) => {
  const res = await Products.findById(id)
  return res
}

export const productsService = {
  createProduct,
  getAllProducts,
  getSingleProduct,
}
