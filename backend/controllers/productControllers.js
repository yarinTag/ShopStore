//this will handle all the product related logic's or functions, controller functions.

const Product = require('../models/product');

//Create new product => /api/v1/product/new
exports.newProduct = async (req,res,next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success: true,
        prodcut
    })
}

exports.getProducts = (req, res, next) => {
    res.status(200).json({  
        success: true,
        message: 'This route will show all products in database.'
    })
}   