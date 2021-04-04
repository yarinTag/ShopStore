const express =  require('express');
const app = express();

const cookieParser = require('cookie-parser');

const errorMiddleware = require('./utils/erros');

app.use(express.json());
app.use(cookieParser());

//Import all routes
const products = require('./routes/product');
const userAuth = require('./routes/userAuth');


app.use('/api/v1', products);
app.use('/api/v1', userAuth); 


//To handle Errors
app.use(errorMiddleware);


module.exports = app; 