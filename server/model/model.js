const mongoose = require("mongoose");

var schema = new mongoose.Schema({
    "name": {
        type: String,
        require: true
    },
    "email": {
        type: String
    },
    "tel": {
        type: Number,
        require: true
    },
    "hair_cut": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "hair_styling": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "hair_coloring": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "hair_locking": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "facial_care": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "full_massage": {
        type: String,
        enum: ['Yes', 'No'],
        default: 'No'
    },
    "date": {
        type: String,
        require: true
    },
    "time": {
        type: String,
        require: true
    },
    "status": {
        type: String,
        enum: ["In progress", "Completed", "Pending", "Absent", "Rescheduled"],
        default: "Pending"
    },
    "comment": {
        type: String
    }
});

const Userdb = mongoose.model("userdb", schema);

module.exports = Userdb