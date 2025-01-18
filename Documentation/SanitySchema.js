// product schema
export const product = {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'id',
      type: 'string',
      title: 'Product ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'stock',
      type: 'number',
      title: 'Stock Quantity',
    },
    {
      name: 'sizes',
      type: 'array',
      title: 'Sizes',
      of: [{ type: 'number' }],
    },
    {
      name: 'colors',
      type: 'array',
      title: 'Colors',
      of: [{ type: 'string' }],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [{ type: 'image' }],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'brand',
      type: 'string',
      title: 'Brand',
    },
  ],
};

// Orders Schema

export const order = {
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'orderId',
      type: 'string',
      title: 'Order ID',
    },
    {
      name: 'customerInfo',
      type: 'object',
      title: 'Customer Info',
      fields: [
        { name: 'name', type: 'string', title: 'Name' },
        { name: 'contact', type: 'string', title: 'Contact' },
      ],
    },
    {
      name: 'orderDetails',
      type: 'array',
      title: 'Order Details',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'productId', type: 'string', title: 'Product ID' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'size', type: 'number', title: 'Size' },
            { name: 'color', type: 'string', title: 'Color' },
          ],
        },
      ],
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
    },
    {
      name: 'shippingAddress',
      type: 'string',
      title: 'Shipping Address',
    },
    {
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: ['Pending', 'Shipped', 'Delivered'],
      },
    },
  ],
};
// Customers Schema

export const customer = {
  name: 'customer',
  type: 'document',
  title: 'Customer',
  fields: [
    {
      name: 'customerId',
      type: 'string',
      title: 'Customer ID',
    },
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email',
    },
    {
      name: 'contactInfo',
      type: 'string',
      title: 'Contact Info',
    },
    {
      name: 'address',
      type: 'object',
      title: 'Address',
      fields: [
        { name: 'shipping', type: 'string', title: 'Shipping Address' },
        { name: 'billing', type: 'string', title: 'Billing Address' },
      ],
    },
  ],
};
// Delivery Zones Schema

export const deliveryZone = {
  name: 'deliveryZone',
  type: 'document',
  title: 'Delivery Zone',
  fields: [
    {
      name: 'zoneId',
      type: 'string',
      title: 'Zone ID',
    },
    {
      name: 'zoneName',
      type: 'string',
      title: 'Zone Name',
    },
    {
      name: 'coverageArea',
      type: 'string',
      title: 'Coverage Area',
    },
    {
      name: 'assignedDrivers',
      type: 'array',
      title: 'Assigned Drivers',
      of: [{ type: 'string' }],
    },
  ],
};
