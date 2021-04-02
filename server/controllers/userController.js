const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErr = require('../utils/catchAsyncErr');
const sendToken = require('../utils/jwtToken');

//Register user => /api/v1/register
exports.registerUser = catchAsyncErr(async (req,res,next) => {
    const {name,email,password} = req.body;
    
    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id: '#1',
            url: 'www.instgram.com'
        }
    })

    sendToken(user, 200 ,res);
})

//Login User => /api/vi/login
exports.loginUser = catchAsyncErr(async(req,res,next) => {
    const { email,password} = req.body;

    //check if email && password is entered by user
    if(!email || !password) {
        return next(new ErrorHandler('Please enter email && password',400));
    }

    //Finding user in dataBase
    const user = await User.findOne({email}).select('+password');

    if(!user) {
        return next(new ErrorHandler('Invalid Email or Password',401));
    }

    //Checks if password is correct 
    const ifPasswordCorrect = await user.comparePassword(password);

    if(!ifPasswordCorrect) {
        return next(new ErrorHandler('Invalid Password',401));
    }

    sendToken(user, 200 ,res);

})

