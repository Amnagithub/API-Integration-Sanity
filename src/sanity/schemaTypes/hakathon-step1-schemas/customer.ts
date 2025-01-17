// Hakathon step #1 = E-commerce for Mobiles & Accesories customer data.
// schemas/customer
const customerSchema = { 
  name: 'customer', 
  title: 'Customer', 
  type: 'document', 
  fields: [ 
	{ name: 'name', title: 'Name', type: 'string' }, 
	{ name: 'email', title: 'Email', type: 'string' }, 
	{ name: 'phone', title: 'Phone', type: 'string' }, 
	{ name: 'address', title: 'Address', type: 'string' } 
  ] 
};

export default customerSchema;