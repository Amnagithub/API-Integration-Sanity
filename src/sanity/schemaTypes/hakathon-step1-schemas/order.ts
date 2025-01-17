// schemas/order
const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    { name: "orderNumber", title: "Order Number", type: "string" },
    {
      name: "customer",
      title: "Customer",
      type: "reference",
      to: [{ type: "customer" }],
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    },
    { name: "totalAmount", title: "Total Amount", type: "number" },
    {
      name: "shipment",
      title: "Shipment",
      type: "reference",
      to: [{ type: "shipment" }],
    },
  ],
};

export default orderSchema;
