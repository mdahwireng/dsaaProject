const mongoose = require("mongoose");

var schema = new mongoose.schema({
    "first name": {
        type: String,
        require: true
    },
    "last name": {
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
    "hair cut": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair styling": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair coloring": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "hair locking": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "facial care": {
        type: String,
        enum: ['yes', 'no'],
        default: 'no'
    },
    "full massage": {
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
    "start date": {
        type: String
    },
    "Status": {
        type: String,
        enum: ["in progress", "completed", "pending", "absent", "rescheduled"],
        default: "pending"
    },
    "end date": {
        type: String,
        require: true
    },
    "comment": {
        type: String
    }
});

const Userdb = mongoose.model("userdb", schema);

module.export = Userdb