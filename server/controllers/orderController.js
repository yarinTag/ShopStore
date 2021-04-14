const Order = require("../models/order");
const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../utils/catchAsyncErr");

//Create a new order => /api/v1/order/new
exports.newOrder = catchAsyncErr(async (req, res, next) => {
  const {
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
  } = req.body;

  // console.log(req.body.orderItems);
  const order = await Order.create({
    orderItems,
    shippingInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymentInfo,
    paitAt: Date.now(),
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    order,
  });
});

//Get single order => /api/v1/order/:id
exports.getSingleOrder = catchAsyncErr(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("No order found", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

//Get logged in user orders => /api/v1/orders/me
exports.myOrder = catchAsyncErr(async (req, res, next) => {
  // const orders = await Order.findById( { user: req.user.id });
  const orders = await Order.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    orders,
  });
});

//Get all orders => /api/v1/admin/orders/
exports.allOrders = catchAsyncErr(async (req, res, next) => {
  // const orders = await Order.findById( { user: req.user.id });
  const orders = await Order.find();

  let totalAmount = 0;
  orders.forEach((order) => {
    //Display all the amount of all the orders on the dashboard
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

//Update orders => /api/v1/admin/order/:id
exports.updateOrder = catchAsyncErr(async (req, res, next) => {
  // const orders = await Order.findById( { user: req.user.id });
  const order = await Order.findById(req.params.id);

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  order.orderItems.forEach(async (item) => {
    await updateStock(item.product, item.quantity);
  });

  order.orderStatus = req.body.status;
  order.deliveredAt = Date.now();

  await order.save();

  res.status(200).json({
    success: true,
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.stock = product.stock - quantity;

  await product.save({ validateBeforeSave: false });
}

//Delete order => /api/v1/admin/order/:id
exports.deleteOrder = catchAsyncErr(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("No order found", 404));
  }

  await order.remove();

  res.status(200).json({
    success: true,
  });
});
