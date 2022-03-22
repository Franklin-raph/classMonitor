const express = require('express')
const router = express.Router();
const { getAllStudent, getAStudent,studentProfileUpdate,studentAssessment } = require('../../controllers/studentController');
const { requireAuth, checkStudent } = require('../../middlewares/auth');

// router.route()

router.get('/', requireAuth, checkStudent, getAllStudent)

router.get('/:student_id', requireAuth, checkStudent, getAStudent)

router.put('/:student_id', requireAuth, checkStudent, studentProfileUpdate)

router.post('/assessment', requireAuth, checkStudent, studentAssessment)

// router.route('/:student_id', requireAuth, checkStudent).get(getAStudent).put(studentProfileUpdate)


module.exports = router;