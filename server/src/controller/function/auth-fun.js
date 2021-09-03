const { validationResult } = require("express-validator");
const user = require("../../model/User");

/* AUTH/HOME, AND MODULE EXPORT */
exports.home = async (req, res) => {
    res.json({
        path_name: "Home",
        url: "/api/auth"
    })
};

/* AUTH/TEST, AND MODULE EXPORT */
exports.test = async (req, res) => {
    res.json({
        path_name: "Test",
        url: "/api/auth/test"
    })
};

/* AUTH/CREATEUSER, AND MODULE EXPORT */
exports.createuser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.errors })
    }
    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            res.json(error)
        })
};