const route = require('express').Router();
const notes_fun = require('../../../controller/function/notes-fun');
const { body } = require('express-validator');

/* Home */
route.get('/', notes_fun.home);

/* TEST */
route.get('/test', notes_fun.test);

/* GET ALL NOTES */
route.get('/allnotes', notes_fun.allnotes);

/* ADD NOTE */
route.post('/addnote', [
    body("title", "Title must be min 3 characters").isLength({ min: 3 }),
    body("description", "Description must be min 5 characters").isLength({ min: 5 })
], notes_fun.addnote);

/* UPDATE NOTE */
route.put('/updatenote/:id', [
    body("title", "Title must be min 3 characters").isLength({ min: 3 }),
    body("description", "Description must be min 5 characters").isLength({ min: 5 })
], notes_fun.updatenote);

/* DELETE NOTE */
route.delete('/deletenote/:id', notes_fun.deletenote);

/* AUTH MODULE EXPORT */
module.exports = route;