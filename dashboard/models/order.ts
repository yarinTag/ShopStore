
export interface Order {
    _id: any;
    shippingInfo: [{ address:String,
    city:String, 
    zipCode: String,
    country: String,
    phoneNu:Number
  }],
  orderItems: [
    {
      name: String,
      quantity: String,
      image: String,
      price: Number,
    }
  ],
  paymentInfo: {
    id:String,
    status: String,
  },
  paidAt: Date,
  itemsPrice: Number,
  taxPrice: Number,
  shippingPrice:Number,
  totalPrice: Number,
  orderStatus: String,
  deliveredAt: Date,
  createdAt: Date,
  user:any
}

