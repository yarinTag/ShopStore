//this will handle all the product related logic's or functions, controller functions.

const Product = require("../models/product");
const axios = require("axios");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../utils/catchAsyncErr");
const APIFeatures = require("../utils/apiFeatures");

//Create new product => /api/v1/product/new
exports.newProduct = catchAsyncErr(async (req, res, next) => {
  req.body.user = req.user.id;
  console.log(req.user);

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});

//Get all products => api/v1/products?keyword=apple
exports.getProducts = catchAsyncErr(async (req, res, next) => {
  const resultsPerPage = 4;
  const productCounter = await Product.countDocuments();

  const apiFeatures = new APIFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultsPerPage);

  const products = await apiFeatures.query; //Bring us all products

  setTimeout(() => {
    res.status(200).json({
      success: true,
      count: products.length,
      productCounter,
      products,
    });
  }, 1000);
});

//Get single product details => /api/v1/product/:id
exports.getSingleProduct = catchAsyncErr(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product details => /api/v1/product/:id
exports.updateProduct = catchAsyncErr(async (req, res, next) => {
  // try{
  let product = await Product.findById(req.params.id); //Use let because we want to reassign it.
  // }catch {
  //     return next(new ErrorHandler('Product not found',404));
  // }
  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getAllProductApi = catchAsyncErr(async (req, res, next) => {
  const { keywords = "iphone" } = req.query;

  const result = await axios.get(
    `https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-NAME=FindingService&SERVICE-VERSION=1.0.0&GLOBAL-ID=EBAY-US&SECURITY-APPNAME=nirassar-webShop-PRD-284deb120-c60ded92&RESPONSE-DATA-FORMAT=JSON&outputSelector(0)=SellerInfo&outputSelector(1)=StoreInfo&keywords=${keywords}`
  );
  res.send(result.data);
});

//Delete product => /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErr(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "product is deleted",
  });
});
