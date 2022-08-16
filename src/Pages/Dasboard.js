import React from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import { logout } from '../features/userslice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {selectUser} from "../features/userslice";




const Dasboard = ({setUser}) => {
  const navigate= useNavigate();
  const selectoruser = useSelector (selectUser)
 
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    //e.preventDefault();
    setUser(null);
    dispatch(logout());
 
     navigate('/login' );
  };
  
  return (
    <Grid container 
    spacing={2}
    direction={'row'}
    justify={'center'}
    alignItems={'center'}
    
     >
  <Grid item lg={8}>
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 200,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
    >
    <Grid container spacing={2}>
        
        <Grid item xs={5}>
       <Typography sx={{ cursor: 'pointer'}} >
       <Typography component="div" >
    <Box sx={{textAlign:'center'}}> <h3>Hello, {selectoruser.email}
    </h3> 
    <Button variant="contained" onClick={(e) => handleLogout (e)}  >Logout</Button>
    </Box>
          </Typography>
       </Typography>
      </Grid>
        </Grid>
        </Paper>
        </Grid>
        </Grid>
  
  )
}

export default Dasboard
