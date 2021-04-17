const jwt = require('jsonwebtoken');
const { allUsers } = require('../controllers/userController');
const user = require('../models/user');
const catchAsyncErr = require("./catchAsyncErr");
const ErrorHandler = require("./errorHandler");

//Checks if user authenticated || not
exports.isAuthenticated = catchAsyncErr(async (req,res,next) => {

    const {token} = req.cookies;


    if(!token) {
        return next(new ErrorHandler('Login first to access this', 401));
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    req.user = await user.findById(decoded.id);

    next();

})

exports.AdminIsAuthenticated = catchAsyncErr(async(req,res,next) => {
    const {token} = req.query
    console.log(req)
    if(!token) {
        return next(new ErrorHandler('token invalid', 401));
    }
    jwt.verify(token,process.env.JWT_SECRET, function(err, decoded) {
        if(err) {
         res.json({isAuthenticated:false})
         return next(new ErrorHandler('Login first to access this', 401))
        }
    res.status(200).json({
        success: true
    })
    next();
})
})

//Handling users roles
exports.authorizeRoles = (...roles) => {
    return (req,res,next) => {
        if(!roles.includes(req.user.role)) {
            return next(
            new ErrorHandler(`Role (${req.user.role}) is not allowed`,403));
        }

        next();
    }
}
