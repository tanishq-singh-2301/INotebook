const route = require('express').Router();
const api_fun = require('../../controller/function/api-fun');

/* Home */
route.get('/', api_fun.home);

/* TEST */
route.get('/test', api_fun.test);

/* 
    AUTH
        --> HOME
        --> TEST
        --> CREATEUSER
*/
route.use('/auth', require("./services/auth"));

/* AUTH MODULE EXPORT */
module.exports = route;