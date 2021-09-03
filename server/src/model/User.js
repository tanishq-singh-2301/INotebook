const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

/* USER SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model("user", new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
}));