const express =  require('express');
const app = express();

const errorMiddleware = require('./utils/erros');

app.use(express.json());


//Import all routes
const products = require('./routes/product');

app.use('/api/v1', products);

//To handle Errors
app.use(errorMiddleware);


module.exports = app; 