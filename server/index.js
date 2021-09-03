require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');

/* 
    CORS
        -> TO ANYONE
*/
app.use(cors({ origin: "*" }));

/* URL PARSER */
app.use(express.json());

/* DIRECTING ALL ROUTES TO ROUTES */
app.use('/', require('./src/router/routes'));

/* PORT */
const PORT = process.env.PORT || 8080;

/* SERVER LISTENING PORT */
app.listen(PORT, () => { console.log(`INotebook server is running on http://localhost:${PORT}`) });