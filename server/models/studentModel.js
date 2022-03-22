const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    studentID: {
        type: String,
        required: true
    }
}, {timeStamps: true})

module.exports = mongoose.model('student', StudentSchema)

