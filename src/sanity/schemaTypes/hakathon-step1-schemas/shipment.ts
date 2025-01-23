// schemas/shipment
const shipmentSchema = {
  name: "shipment",
  title: "Shipment",
  type: "document",
  fields: [
    { name: "trackingNumber", title: "Tracking Number", type: "string" },
    { name: "carrier", title: "Carrier", type: "string" },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Shipped", value: "shipped" },
          { title: "Delivered", value: "delivered" },
        ],
      },
    },
  ],
};

export default shipmentSchema;
