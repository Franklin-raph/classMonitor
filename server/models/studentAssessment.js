const mongoose = require('mongoose')

const StudentAssessmentSchema = mongoose.Schema({
    reference : {
        type: String,
        required: true
    },
    task : {
        type: String,
        required: true
    }
}, {timeStamps: true})

module.exports = mongoose.model('studentAssesment', StudentAssessmentSchema);