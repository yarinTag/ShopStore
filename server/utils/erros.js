const ErrorHandler = require('./errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; //if this doesn't exist then 500 will be by default
    err.message = err.message || 'Internal Server Error';

    //Handling mongoose validation error, if u missing product name (something req)
    if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(value=>value.message);
        error = new ErrorHandler(message,400);
    }

    //Handling mongoose duplicate key erros
    if(err.code === 11000) {
        const message = `${Object.keys(err.keyValue)} entered`;
        error = new ErrorHandler(message,400);
    }

    res.status(err.statusCode).json({
        success: false,
        error: err.stack //Printed complete error 
    })
} 