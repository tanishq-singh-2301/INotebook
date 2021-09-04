const { body } = require("express-validator");
const route = require('express').Router();
const auth_fun = require('../../../controller/function/auth-fun');
const fetchuser = require('../../../middleware/fetchuser');

/* Home */
route.get('/', auth_fun.home);

/* TEST */
route.get('/test', auth_fun.test);

/* CREATEUSER */
route.post('/createuser', [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").isLength({ min: 5 })
], auth_fun.createuser);

/* LOGIN */
route.post('/login', [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password").exists()
], auth_fun.login);

/* GETUSER */
route.post('/getuser', fetchuser, auth_fun.getuser);

/* AUTH MODULE EXPORT */
module.exports = route;