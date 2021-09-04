const { validationResult } = require("express-validator");
const user = require("../../model/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/* AUTH/HOME, AND MODULE EXPORT */
exports.home = async (req, res) => {
    res.json({
        path_name: "Home",
        url: "/api/auth"
    });
};

/* AUTH/TEST, AND MODULE EXPORT */
exports.test = async (req, res) => {
    const data = await user.find({});
    res.json({
        path_name: "Test",
        url: "/api/auth/test",
        data: data
    });
};

/* AUTH/CREATEUSER, AND MODULE EXPORT */
exports.createuser = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.errors })
    }
    const salt = await bcrypt.genSalt(5);
    const pass = await bcrypt.hash(req.body.password, salt);
    await user.create({
        name: req.body.name,
        email: req.body.email,
        password: pass
    })
        .then(result => {
            const token = jwt.sign({
                user: {
                    id: result._id
                }
            }, process.env.JWT_SECRECT);
            res.json({ token });
        })
        .catch(error => {
            res.json(error);
        });
};

/* AUTH/LOGIN, AND MODULE EXPORT */
exports.login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.errors });
    }
    const isUser = await user.findOne({ email: req.body.email });
    if (isUser) {
        if (await bcrypt.compare(req.body.password, isUser.password)) {
            const token = jwt.sign({
                user: {
                    id: isUser._id
                }
            }, process.env.JWT_SECRECT);
            res.json({ token });
        } else {
            res.status(400).json({ error: 'Invalid Credentials' });
        }
    } else {
        res.status(400).json({ error: 'Invalid Credentials' });
    }
};

/* AUTH/GETUSER, AND MODULE EXPORT --> LOGIN REQUIRED */
exports.getuser = async (req, res) => {
    const errors = validationResult(req);
    try {
        const data = await user.findById(req.user.id).select('-password');
        res.json({ data });
    } catch (error) {
        res.status(500).json({ error });
    }
};