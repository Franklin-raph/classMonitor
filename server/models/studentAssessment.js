const mongoose = require('mongoose')

const StudentAssessmentSchema = mongoose.Schema({
    reference : {
        type: String,
    },
    task : {
        type: String,
    },
    solution : {
        type: String,
    },
    studentID : {
        type:String,
    }

}, {timestamps: true})

module.exports = mongoose.model('studentAssesment', StudentAssessmentSchema);