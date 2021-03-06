const mongoose  = require('mongoose');

const connectDataBase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).catch(function (reason) {
        console.log('Unable to connect to the mongodb instance. Error: ', reason);
    })
    .then(con => {
        console.log(`MongoDB DataBase connected with HOST: ${con.connection.host}`);
    })
//     mongoose.connection.on('connected', () => {
//         console.log('Connected to mongo instance');
//     });
//     mongoose.connection.on('error',(err) => {
//         console.log('Error connecting to mongo' ,err);
//     });
 }

module.exports = connectDataBase;