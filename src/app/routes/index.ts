import express from 'express'
import { UserRoutes } from '../modules/users/users.route'
import { AuthRoutes } from '../modules/auth/auth.route'
import { productsRoute } from '../modules/product/product.route'
import { ordersRoute } from '../modules/orders/orders.route'
const routes = express.Router()

// Routes
const Routers = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/products',
    route: productsRoute,
  },
  {
    path: '/orders',
    route: ordersRoute,
  },
]

Routers.forEach(route => routes.use(route.path, route.route))

export default routes
