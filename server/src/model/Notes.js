const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

/* NOTES SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model("notes", new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    },
}));