import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col } from "reactstrap";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Link } from 'react-router-dom';

const AllStudents = () => {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudentsData() 
},[])

const fetchStudentsData = async () => {
    try {
      const res = await axios.get('https://classroommonitorbackend.herokuapp.com/student')
      const data = await res.data
      setStudents(data)
      console.log(data)
  } catch (error) {
      console.log(error)
  }
}

console.log(students)

  return (
    <div>
      
          <Container>
            <Row>
            {students.length !== 0 ? 
            students.map((student) => {
              return(
                <>
                  <Col sm="12" md="6" lg="4" className='my-3'>
                    <Link to={`/student/${student.studentID}`}>
                        <Box> 
                          <h5>Name : {student.name}</h5>
                          <h5>Email : {student.email}</h5>
                        </Box>
                  </Link>
                </Col>
                </> 
              )
            })
            :
            <Backdrop sx={{ color: '#002141', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          }
            </Row>
          </Container>
    </div>
  )
}

export default AllStudents

const Box = props => <div className="box">{props.children} </div>;