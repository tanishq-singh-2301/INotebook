const { Schema } = require('mongoose');
const mongoose = require('../database/connection');

/* NOTES SCHEMA, AND MODULE EXPORT */
module.exports = mongoose.model("notes", new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    tag: {
        type: String,
        default: 'General'
    },
    date: {
        type: Date,
        default: Date.now
    },
}));