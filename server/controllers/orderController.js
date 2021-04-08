const Order = require('../models/order');
const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErr = require('../utils/catchAsyncErr');

//Create a new order => /api/v1/order/new
exports.newOrder = catchAsyncErr(async (req,res,next) => {
    const {
        orderItems,
        shippingInfo,
        itemPrice,
        texPrice,
        shippingPrice,
        totalPrice,
        paymentInfo
    } = req.body;

    const order =await Order.create({
        orderItems,
        shippingInfo,
        itemPrice,
        texPrice,
        shippingPrice,
        totalPrice,
        paymentInfo,
        paitAt: Date.now(),
        user: req.user._id
    })

    res.status(200).json({
        success: true,
        order
    })
})

//Get single order => /api/v1/order/:id
exports.getSingleOrder = catchAsyncErr(async(req,res,next) => {
    const order = await Order.findById(req.params.id).populate('user','name email');

    if(!order) {
        return next(new ErrorHandler('No order found',404));
    }

    res.status(200).json({
        success: true,
        order
    })
})

//Get logged in user orders => /api/v1/orders/me
exports.myOrder = catchAsyncErr(async(req,res,next) => {
    // const orders = await Order.findById( { user: req.user.id });
    const orders = await Order.find( {user: req.user.id});

    res.status(200).json({
        success: true,
        orders
    })
})