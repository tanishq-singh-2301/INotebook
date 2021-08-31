const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
    dbName: process.env.MONGO_DB_DB_NAME,
    user: process.env.MONGO_DB_USERNAME,
    pass: process.env.MONGO_DB_PASSWORD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
mongoose.connection.on('error', function () { console.log('error database') })
mongoose.connection.once('open', function () { console.log('connected to database') });
module.exports = mongoose.connection;