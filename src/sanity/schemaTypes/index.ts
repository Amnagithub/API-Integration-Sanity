import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './products'
import customerSchema from './hakathon-step1-schemas/customer'
import orderSchema from './hakathon-step1-schemas/order'
import shipmentSchema from './hakathon-step1-schemas/shipment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema,customerSchema,orderSchema,shipmentSchema],
}
