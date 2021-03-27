const app = require('./app');
const connectDataBase = require('./config/database');


const dotenv = require('dotenv');

//setting up config file
dotenv.config({path: 'backend/config/config.env'});

//Connecting to database
connectDataBase();

app.listen(process.env.port, ()=> {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})