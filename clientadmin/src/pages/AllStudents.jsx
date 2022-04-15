import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container, Row, Col } from "reactstrap";

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
            {students.map((student) => {
              return(
                <>
                <Col sm="12" md="6" lg="4" className='my-3'>
                  <Box> 
                    <h5>Name : {student.name}</h5>
                    <h5>Email : {student.email}</h5>
                  </Box>
              </Col>
                </> 
              )
            })}
            </Row>
          </Container>
    </div>
  )
}

export default AllStudents

const Box = props => <div className="box">{props.children} </div>;