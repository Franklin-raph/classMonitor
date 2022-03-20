const Student = require('../models/studentModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('underscore');
// const { requireAuth } = require('../../middlewares/auth')

// Register student
const registerStudent = async (req, res) => {
    
    const { name, email, password, phoneNum } = req.body

    try {
        let student = await Student.findOne({name})
        let studentEmail = await Student.findOne({email})

        if(student) return res.status(400).json({ msg:"Username alraedy exists" })

        if(studentEmail) return res.status(400).json({ msg: "Email already exists"})

        student = new Student({
            name,email, password, phoneNum
        })

        const salt = await bcrypt.genSalt(10);
        student.password = await bcrypt.hash(password, salt)
        await student.save()

        const createToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 60*60*1000*24*3
            })
        }

        const token = createToken(student._id)
        res.cookie('myToken', token, { httpOnly: true, maxAge: 60*60*1000*24*3})
        res.status(200).json({student:student._id, token})

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}

// Login student
const loginStudent = async (req, res) => {

    const { email, password } = req.body

    try {
        let student = await Student.findOne({email})
        if(!student) return res.status(400).json({ msg: "_Invalid login credentials"})

        let isMatch = await bcrypt.compare(password, student.password)
        if(!isMatch) return res.status(400).json({ msg: "Invalid. login credentials"})


        const createToken = (id) => {
            return jwt.sign({ id }, process.env.JWT_SECRET, {
                expiresIn: 60*60*1000*24*3
            })
        }

        const token = createToken(student._id)
        res.cookie('myToken', token, { httpOnly: true, maxAge: 60*60*1000*24*3})
        res.status(200).json({student:student._id, token})

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}


// Get all students
const getAllStudent = async (req, res) => {
    let student = res.locals.student;
    try {
        const students = await Student.find().sort({ createdAt: -1 });
        const allStu = students.map(({name,email})=> ({name,email}))
        const currentStudent = _.pick(student,'name','email');
        res.json({allStu,currentStudent});

    } catch (error) {
        console.log(error)
        res.status(500).send("Server Error")
    }
}

// Student sign out
const studentLogout = (req, res) => {
    res.cookie('myToken', '', {maxAge: 1})
    return res.send("Student is signed out")
}


module.exports = {
    loginStudent,
    registerStudent,
    getAllStudent,
    studentLogout
}