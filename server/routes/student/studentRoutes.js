const express = require('express')
const router = express.Router();
const { getAllStudent, getAStudent,studentProfileUpdate,studentAssessment, studentAssessmentSolution } = require('../../controllers/studentController');
const { requireAuth, checkStudent } = require('../../middlewares/auth');

// router.route()

router.get('/', getAllStudent)



// router.get('/:student_id', requireAuth, checkStudent, getAStudent)

router.get('/:student_id', getAStudent)

// router.patch('/:student_id', requireAuth, checkStudent, studentProfileUpdate)

router.patch('/:student_id', studentProfileUpdate)

router.post('/task', studentAssessment)

router.post('/solution', studentAssessmentSolution)

// router.route('/:student_id', requireAuth, checkStudent).get(getAStudent).put(studentProfileUpdate)


module.exports = router;