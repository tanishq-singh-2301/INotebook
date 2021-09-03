const mongoose = require('mongoose');

/* MONGOOSE CONNECT */
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB_CONNECTION_URL}`, {
    dbName: process.env.MONGO_DB_LOCAL_DATABASE_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/* ON ERROR */
mongoose.connection.on('error', function () { console.log('error database') });

/* ON CONNECTED */
mongoose.connection.once('open', function () { console.log('connected to database') });

/* CONNECTION MODULE EXPORT */
module.exports = mongoose.connection;