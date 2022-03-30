const mongoose = require('mongoose')

const StudentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    email:{
        type: String,
    },
    address:{
        type: String
    },
    password: {
        type: String,
    },
    phoneNum: {
        type: String,
    },
    gender: {
        type: String,
    },
    studentID: {
        type: String,
    },
    github: {
        type: String,
    }
}, {timeStamps: true})

module.exports = mongoose.model('student', StudentSchema)

