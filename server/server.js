
const app = require('./app');

const connectDataBase = require('./config/database');

const dotenv = require('dotenv');

//Handle Uncaught exceptions 
process.on('uncaughtException',err => {
    console.log(`ERROR: ${err.stack}`);
    console.log(`Shutting down uncaught exception`);
    process.exit(1);
})
//example to uncaught exceptions
//console.log(a); 


//setting up config file
dotenv.config({path: './config/config.env'});

//Connecting to database
connectDataBase();

app.listen(process.env.port, ()=> {
    console.log(`Server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
})


