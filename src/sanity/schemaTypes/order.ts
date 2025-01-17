
const orderSchema = {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customerId', type: 'string', title: 'Customer ID' },
      { name: 'products', type: 'array', of: [{ type: 'object', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'status', type: 'string', title: 'Order Status' },
      { name: 'createdAt', type: 'datetime', title: 'Order Created At' },
    ]
};

export default orderSchema;