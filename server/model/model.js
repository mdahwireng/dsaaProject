const mongoose = require("mongoose");

var schema = new mongoose.schema({
    "first_name": {
        type: String,
        require: true
    },
    "last_name": {
        type: String,
        require: true
    },
    "email": {
        type: String,
        require: true
    },
    "tel": {
        type: Number,
        require: true
    },
    "hair_cut": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair_styling": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair_coloring": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair_locking": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "facial_care": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "full_massage": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "date": {
        type: String,
        require: true
    },
    "time": {
        type: String,
        require: true
    },
    "start_date": {
        type: String
    },
    "Status": {
        type: String,
        enum: ["in progress", "completed", "pending", "absent", "rescheduled"],
        default: "pending"
    },
    "end_date": {
        type: String,
        require: true
    },
    "comment": {
        type: String
    }
});

const Userdb = mongoose.model("userdb", schema);

module.export = Userdb