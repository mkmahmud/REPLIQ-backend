import { IOrders } from './orders.interface'
import { Orders } from './orders.model'

// Create Order
const createOrder = async (data: IOrders): Promise<IOrders> => {
  const res = await Orders.create(data)
  return res
}

// Get Orders
const getAllOrders = async () => {
  const res = await Orders.find({})
  return res
}

// Get Single Order
const getSingleOrder = async (id: string) => {
  const res = await Orders.findById(id)
  return res
}

export const ordersService = {
  createOrder,
  getAllOrders,
  getSingleOrder,
}
