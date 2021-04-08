const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const errorMiddleware = require('./utils/erros');

app.use(express.json());
app.use(cookieParser());
app.use(cors())

//Import all routes
const products = require('./routes/product');
const userAuth = require('./routes/userAuth');
const order = require('./routes/order');

app.use('/api/v1', products)
app.use('/api/v1', userAuth)
app.use('/api/v1',order);


//To handle Errors
app.use(errorMiddleware);


module.exports = app;