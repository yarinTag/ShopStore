//this will handle all the product related logic's or functions, controller functions.

const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErr = require('../utils/catchAsyncErr');



//Create new product => /api/v1/product/new
exports.newProduct = catchAsyncErr(async(req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        product
    })
})

//Get all products => api/v1/products
exports.getProducts = catchAsyncErr(async(req, res, next) =>  {

    const products = await Product.find(); //Bring us all products 

    res.status(200).json({  
        success: true,
        count: products.length,
        products
    })
})

//Get single product details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErr(async(req,res,next) => {
    
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found',404));
    }

    res.status(200).json({
        success: true,
        product
    })
})

//Update Product details => /api/v1/product/:id
exports.updateProduct = catchAsyncErr(async(req,res,next) => {

    // try{
    let product = await Product.findById(req.params.id);//Use let because we want to reassign it.
    // }catch {
    //     return next(new ErrorHandler('Product not found',404));
    // }
    if (!product) {
        return next(new ErrorHandler('Product not found',404));
    }


    product = await Product.findByIdAndUpdate(req.params.id, req.body ,{
        new:true,
        runValidators:true,
        useFindAndModify: false,
    });

    res.status(200).json({
        success: true,
        product
    })

})

//Delete product => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErr(async(req, res ,next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler('Product not found',404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "product is deleted"
    })

})

