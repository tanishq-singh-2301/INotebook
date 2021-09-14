const route = require('express').Router();
const api_fun = require('../../controller/function/api-fun');
const fetchuser = require('../../middleware/fetchuser');

/* Home */
route.get('/', api_fun.home);

/* TEST */
route.get('/test', api_fun.test);

/* 
    AUTH
        --> Home
        --> Test
        --> Createuser
        --> Login
        --> Fetch User
*/
route.use('/auth', require("./services/auth"));

/* 
    NOTES
        --> Home
        --> Test
        --> All Notes
        --> Add Note
        --> Update Note
        --> Delete Note
*/
route.use('/notes', fetchuser, require("./services/notes"));
// 
/* AUTH MODULE EXPORT */
module.exports = route;