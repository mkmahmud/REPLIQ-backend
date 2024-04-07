import { Schema, model } from 'mongoose'
import { IProduct, ProductModel } from './product.interface'

const productsSchema = new Schema<IProduct>(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
    },
    attributes: {
      type: [String],
    },

    rating: {
      type: Number,
    },

    availability: {
      type: Boolean,
    },

    relatedProducts: {
      type: [String],
    },
    tags: {
      type: [String],
    },
  },
  {
    timestamps: true,
  },
)

export const Products = model<IProduct, ProductModel>(
  'products',
  productsSchema,
)
