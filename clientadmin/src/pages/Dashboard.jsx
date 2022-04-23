import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PeopleIcon from '@mui/icons-material/People';

const Dashboard = () => {

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

  return (
    <div className="container">
      <div className="row mt-4" style={{marginRight:'auto', marginLeft:'auto'}}>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="dashboardCard m-3">
            <div className="iconAndTitle">
              <PeopleIcon sx={{fontSize:'4rem', marginRight:'10px'}}/> <h4>Students</h4>
            </div>
            <h4 className='dashboardCardNum'>{students.length}</h4>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="dashboardCard m-3">
            <div className="iconAndTitle">
              <PeopleIcon sx={{fontSize:'4rem', marginRight:'10px'}}/> <h4>Admins</h4>
            </div>
            <h4 className='dashboardCardNum'>2</h4>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="dashboardCard m-3">
            <div className="iconAndTitle">
              <PeopleIcon sx={{fontSize:'4rem', marginRight:'10px'}}/> <h4>Students</h4>
            </div>
            <h4 className='dashboardCardNum'>20</h4>
          </div>
        </div>

        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="dashboardCard m-3">
            <div className="iconAndTitle">
              <PeopleIcon sx={{fontSize:'4rem', marginRight:'10px'}}/> <h4>Students</h4>
            </div>
            <h4 className='dashboardCardNum'>20</h4>
          </div>
        </div>

       </div>
     </div>
  )
}

export default Dashboard