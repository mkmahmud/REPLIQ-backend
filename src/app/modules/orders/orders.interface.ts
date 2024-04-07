import { Model } from 'mongoose'

export interface IOrders {
  userName: string
  email: string
  phoneNumber: string
  address: string
  products: [
    { img: string; name: string; id: string; quantity: number; price: number },
  ]
  totalPrice: number
}

export type OrdersModel = Model<IOrders>
