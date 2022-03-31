const express = require('express')
const router = express.Router();
const { loginStudent, registerStudent, studentLogout } = require('../../controllers/studentController')
const upload = require('../../controllers/multer');

router.post('/login', loginStudent);

router.post('/register', upload.single('image'), registerStudent)

router.get('/logout', studentLogout)


module.exports = router;