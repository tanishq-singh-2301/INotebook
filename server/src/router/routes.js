const route = require('express').Router();
const controller = require('../controller/controller');

/* HOME */
route.get('/', controller.home);

/* ALL ROUTES */
route.get('/allpaths', controller.allpaths)

/* TEST */
route.get('/test', controller.test);

/*
    DIRECTING ALL ROUTES FROM /API/* TO API ROUTE
    API
        --> Home
        --> Test
        --> AUTH.. { Further Branched Into More Routes (APIs) }
        --> NOTES.. { Further Branched Into More Routes (APIs) }
*/
route.use('/api', require('./api/api'));

/* ROUTES EXPORT MODULE */
module.exports = route;