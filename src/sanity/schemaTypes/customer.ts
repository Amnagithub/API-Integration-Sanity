
const orderSchema = {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'Customer_id', type: 'string', title: 'Customer_id' },
      { name: 'user_name', type: 'string', title: 'user name' },
      { name: 'email', type: 'string', title: 'email' },
      { name: 'Contact', type: 'string', title: 'Contact' },
      { name: 'address', type: 'string', title: 'Address' },
    ]
};

export default orderSchema;