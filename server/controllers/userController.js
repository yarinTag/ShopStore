const User = require('../models/user');

const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErr = require('../utils/catchAsyncErr');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require('crypto');

//Register user => /api/v1/register
exports.registerUser = catchAsyncErr(async (req, res, next) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        const user = await User.create({
            firstName,
            lastName,
            email,
            password,
            avatar: {
                public_id: '#1',
                url: 'www.instgram.com'
            }
        })

        sendToken(user, 200, res);
    } catch (error) {
        console.log(error)
    }
})


//Login User => /api/vi/login
exports.loginUser = catchAsyncErr(async (req, res, next) => {
    const { email, password } = req.body;

    //check if email && password is entered by user
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email && password', 400));
    }

    //Finding user in dataBase
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    //Checks if password is correct 
    const ifPasswordCorrect = await user.comparePassword(password);

    if (!ifPasswordCorrect) {
        return next(new ErrorHandler('Invalid Password', 401));
    }

    sendToken(user, 200, res);

})

//Forgot password => /api/v1/passowrd/forgot
exports.forgotPassword = catchAsyncErr(async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return next(new ErrorHandler('Email not found', 401));
    }

    //get reset token
    const resetToken = user.getResetPasswordToken();
    await user.save({ validateBeforeSave: false });

    //create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/password/reset/${resetToken}`;
    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nif you have not requested this emailm, then ignore it`;

    try {
        await sendEmail({
            email: user.email,
            subject: 'ShopeStore password Recovery',
            message: `${message}: ${user.email}`
        })

        res.status(200).json({
            success: true,
            message
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });
        return next(new ErrorHandler(error.message, 500));
    }
})

//Reset Password => /api/v1/password/reset/:token
exports.resetPassword = catchAsyncErr(async (req, res, next) => {

    //hash URL token - to make sure the token is correct
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler(`Password reset token is invalid or expired`, 400));
    }

    if (req.body.password !== req.body.confirmPassword) { //one is password and one to confirm password
        return next(new ErrorHandler('Password does not match', 400));
    }

    //setup new password
    user.password = req.body.password;

    //have to make these tools undefined after setting the new password bc we don't have to leave it open 
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);


})

//LogOut user => /api/v1/logout
exports.logOut = catchAsyncErr(async (req, res, next) => {
    res.cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success: true,
        message: "Logged Out"
    })
})

