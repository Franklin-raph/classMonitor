import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import axios from 'axios'
import Avatar from '@mui/material/Avatar';
import { makeStyles } from '@mui/styles'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography'
import { useSelector } from 'react-redux'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: 20,
    },
    innerCardDesign : {
        display: 'flex',
    },
    innerCardText : {
        marginLeft : 20
    },
    links : {
        textDecoration: 'none'
    },
    containerStyle : {
        [theme.breakpoints.down("lg")] : {
            marginTop: '1rem',
            marginBottom: '4rem'
        }
    }
}))

const AllStudents = ({baseUrl}) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const studentDetails = useSelector(state => state.student)
    if(studentDetails.value === null){
        navigate(`/login`)
      }
    console.log(searchInput)

    useEffect( async () => {
        getALlStudents()
    },[])

    async function getALlStudents(){
        const res = await fetch(`${baseUrl}/student`)
        const data = await res.json()
        setStudents(data)
        console.log(data)
    }
    console.log(students)

  return (
    <Container className={classes.containerStyle}>
            {students && 
            <>
                <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 250, margin: '18px auto' }}
                >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for a student"
                    onChange={(e) => {
                        setSearchInput(e.target.value)
                    }}
                />
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        <Grid container spacing={{ xs: 2, md: 3 }} >
            {students.length !== 0 ?
                students.filter((val) => {
                    if(searchInput === "") return val
                    else if (val.email.toLowerCase().includes(searchInput.toLowerCase()) || val.firstName.toLowerCase().includes(searchInput.toLowerCase())) return val
                })
                .map((student) => {
                    return (
                    <Grid item key={student.studentID} xs={12} sm={6} md={4}>
                        <Link to={`/student/${student.studentID}`} className={classes.links}>
                            <Card elevation={3} className={classes.paperStyle}>
                                <div className={classes.innerCardDesign}>
                                    {student.email && <Avatar sx={{ backgroundColor:'#808080'}}>{student.email.charAt(0)}</Avatar>}
                                    <div className={classes.innerCardText}>
                                        <Typography variant='subtitle2' sx={{fontSize: '16px'}}>{student.email}</Typography>
                                        {student.firstName}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Grid> 
                    )
                }):(
                <Backdrop sx={{ color: '#002141', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
                >
                <CircularProgress color="inherit" />
                </Backdrop>
            )}
        </Grid>
            </>
            }
    </Container>
  )
}

export default AllStudents