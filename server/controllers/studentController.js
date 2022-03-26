const Student = require('../models/studentModel');
const StudentAssessmentModel = require('../models/studentAssessment')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('underscore');
const { v4: uuidv4 } = require('uuid');


// Register student
const registerStudent = async (req, res) => {
    
    const { name, email, password, phoneNum, gender, address } = req.body

    try {
        let student = await Student.findOne({name})
        let studentEmail = await Student.findOne({email})

        if(student) return res.status(400).json({ msg:"Username alraedy exists" })

        if(studentEmail) return res.status(400).json({ msg: "Email already exists"})

        const student_id = `TN-${uuidv4()}`;

        student = new Student({
            name, email, password, phoneNum, gender, address, studentID:student_id
        })

        const salt = await bcrypt.genSalt(10);
        student.password = await bcrypt.hash(password, salt)
        await student.save();

        const createToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 60*60*1000*24*3
            })
        }

        const token = createToken(student._id)
        res.cookie('myToken', token, { httpOnly: true, maxAge: 60*60*1000*24*3})
        const registeredStudent = _.pick(student, 'name','email','phoneNum','gender','studentID');
        res.status(200).json({registeredStudent,token})

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}


// Login student
const loginStudent = async (req, res) => {

    const { studentID, password } = req.body

    try {
        let student = await Student.findOne({studentID})
        if(!student) return res.status(400).json({ msg: "Invalid login credentials"})

        let isMatch = await bcrypt.compare(password, student.password)
        if(!isMatch) return res.status(400).json({ msg: "Invalid login credentials"})

        const createToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 60*60*1000*24*3
            })
        }

        const token = createToken(student._id)
        res.cookie('myToken', token, { httpOnly: true, maxAge: 60*60*1000*24*3})
        return res.status(200).json({student_id:studentID, token})

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}


// Get all students
const getAllStudent = async (req, res) => {
    let student = res.locals.student;
    console.log(student)
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        const allStu = students.map(({name,email,studentID}) => ({name,email,studentID}))
        res.json(allStu);

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}


// Get a single student
const getAStudent = async (req, res) => {
    let student = res.locals.student;
    console.log(student)
    try {
        const student = await Student.findOne({ studentID : req.params.student_id });
        if(!student) return res.status(404).json({msg: `No student with id ${req.params.student_id}`})

        const stdData = _.pick(student, 'name','email','studentID');

        return res.status(200).json({stdData});

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
}


// Student sign out
const studentLogout = (req, res) => {
    res.cookie('myToken', '', {maxAge: 1})
    return res.send("Student is signed out")
}


// Student update profile
const studentProfileUpdate = async (req, res) => {

    // the logged in user id
    let currentStudent = res.locals.student
    let loggedInStudentId = currentStudent._id.toString()
    console.log(`The current logged in student id is -> ${loggedInStudentId}`)

    // The id of the user who made the post
    let profileUpdateStudent = await Student.findOne({_id: req.params.student_id})
    let profileUpdateStudentId = profileUpdateStudent._id.toString()
    console.log(`This post was made by this user with an id of -> ${profileUpdateStudentId}`)

    const { name, email } = req.body
    try {
        if(loggedInStudentId === profileUpdateStudentId){

            let student = await Student.findOne({name})
            let studentEmail = await Student.findOne({email})

            if(student) return res.status(400).json({ msg:"Username alraedy exists" })

            if(studentEmail) return res.status(400).json({ msg: "Email already exists"})

            Student.findById({ _id: req.params.student_id })
            .then(result => {
                result.name = req.body.name;
                result.email = req.body.email;

                result.save();
                res.json({ result })
            })
        }else {
            return res.status(403).json({msg:"You are not authorized to Edit this profile"})
        }
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error")
    }
}


// STUDENTS ASSESSMENT SECTION
const studentAssessment = async (req, res) => {
    const { reference, task } = req.body;

    try {
        const assessment = new StudentAssessmentModel({
            reference, task
        })
    
        await assessment.save()
        res.status(200).json({assessment})
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error")
    }
}


module.exports = {
    loginStudent,
    registerStudent,
    getAllStudent,
    studentLogout,
    getAStudent,
    studentProfileUpdate,
    studentAssessment
}