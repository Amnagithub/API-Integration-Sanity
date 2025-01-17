// Hakathon step #1 = E-commerce for Mobiles & Accesories products data.
const products = 
{ name: 'product', 
    title: 'Product', 
    type: 'document', 
    fields: [ 
        { name: 'name', 
            title: 'Name', 
            type: 'string', }, 
            { name: 'description', 
                title: 'Description', 
                type: 'text', }, 
                { name: 'price', 
                    title: 'Price', 
                    type: 'number', }, 
                    { name: 'image', 
                        title: 'Image', 
                        type: 'image', 
                    }, 
                    { name: 'category', 
                        title: 'Category', 
                        type: 'string', 
                        options: { list: [ { title: 'Mobile', value: 'mobile' }, { title: 'Accessory', value: 'accessory' }, 

                        ], }, }, ],}

export default products;