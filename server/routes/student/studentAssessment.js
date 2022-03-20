const express = require('express')
const router = express.Router();
const { getAllStudent } = require('../../controllers/studentController');
const { requireAuth, checkStudent } = require('../../middlewares/auth');

// router.route()

router.get('/', requireAuth, checkStudent, getAllStudent)


module.exports = router;