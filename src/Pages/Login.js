
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@mui/material/Typography';
import Logo from "../images/signin.png";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@material-ui/core/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Link from '@mui/material/Link';
import ButtonBase from '@mui/material/ButtonBase';
import EnhancedEncryptionIcon from '@mui/icons-material/EnhancedEncryption';
import { useForm, useFormState } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { login } from '../features/userslice';




const Login = ({ setUser }) => {
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
//   useForm({
//     name :'string',
//     email :'string',
//     rememberme : 'sring'
//   )}
//  const { register, watch } = useForm<FormValues>();


const { register, handleSubmit,  formState:{errors} } = useForm(); 
 
const dispatch = useDispatch();


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(name, email);
  //   if(!name || !email) return;
  //   setUser({name: name, email: email});
  //   localStorage.setItem('name', name)
  //   navigate('/dashboard' );
  // };
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[400]),
    backgroundColor: blue[400], 
    '&:hover': {
      backgroundColor: blue[300],
    },
  }));

  return (
    <Box sx={{ bgcolor: '#f7f7f7' ,padding:'40px' }} > 
    <Box sx={{ bgcolor: '#f7f7f7' }} > 
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
      maxWidth: 100,
      flexGrow: 1,
      backgroundColor:'#f7f7f7',
      
      
    }}
  >
    <Grid container  spacing={2}>
    <Grid item md={6}>
    <Box sx={{ display: 'row',  ml: 1, my: 0.5 , mt: 6}}>
    <CardMedia
        component="img"
        // width={44}
        img src={Logo}
        alt="image"
        
      /> 
      
   
      </Box>
     
      </Grid>
      <Grid item xs={8} sm container>
        <Grid item xs container direction="column" spacing={2}>
          <Grid item xs>
          <Grid item md={6}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%' }}>
        <CardContent sx={{ flex: '1 0 auto' , width:'100%',  }}>
        <form  className='form' onSubmit={handleSubmit ((data) => {
       
          setUser({ email: email});
          // setEmail (email)
          // setPassword (password)
          dispatch(
            login({
              email: data.email,
              password: data.password,
              loggedIn: true,
            })
          );
          //localStorage.setItem('email', email)
          navigate('/dashboard' );
        })}> 
        <Box sx={{ display: 'flex', padding:'10px', letterSpacing:'244px' }}>
          <Typography component="div" variant="h3">
           Login
          </Typography>
          </Box>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-end', padding:'8px'}}>
        <AccountCircle sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <TextField {...register("name", {required:"Required"}) }  error={!!errors?.name} helperText={errors?.name ? errors.name.message:null} id='name'  sx={{letterSpacing:'22px'}}
            value={name}
            onChange={(e) => setName(e.target.value)} label="Name" variant="standard" />
      </Box> */}
      <Box sx={{ display: 'flex', alignItems: 'flex-end', padding:'8px' }}>
        <EmailIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <TextField  {...register("email", {required:"Required"}, { pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/ })} error={!!errors?.email} helperText={errors?.email ? errors.email.message:null} id='email ' type='email' value={email} onChange={(e) => setEmail(e.target.value)} label="Email" variant="standard" /> 
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', padding:'8px' }}>
        <EnhancedEncryptionIcon sx={{ color: 'black', mr: 1, my: 0.5 }} />
        <TextField  {...register("password", {minLength: {value: 6, message: 'Password must be 6 characters'}})} error={!!errors?.password} helperText={errors?.password ? errors.password.message:null} id='email ' type='password' value={password} onChange={(e) => setPassword(e.target.value)} label="Password" variant="standard" /> 
      </Box>

          {/* <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography> */}
          <Box sx={{ display: 'flex', padding:'10px' }}>
         <FormControlLabel control={<Checkbox   />} value='yes' {...register("rememberme")} label="Remember Me" />
         </Box>
         <Box sx={{ display: 'flex', padding:'10px' }}>
         <ColorButton  type='submit' variant="contained" color="blue"  >
         <Typography component="div" sx={{ color:'white' }} >
           Login
          </Typography>
    </ColorButton>
    </Box>
   
          </form>
       
        
        </CardContent>
     
       
      
        
      </Box>
      </Grid>

        </Grid>
      </Grid>
      </Grid>
      <Grid item xs={9}>
     
    
      <Box sx={{ display: 'flex', float:'right', alignItems: 'flex-end' }}>Login with <FacebookIcon sx={{ color: '#4056a3', mt: 1,  ml:1 }} /> <TwitterIcon sx={{ color: '#15a1ec', ml:1}} /> <GoogleIcon sx={{ color: '#bd2643', ml:1 }} /> </Box>
      
    
     <Grid item md={6}>
   
    <Box sx={{ display: 'flex',  mt:2 , paddingRight:'20px', float:'right' , cursor:'pointer' }}> <Link src="./Pages/registration.js" color="inherit"> Create an Account </Link> </Box>
          </Grid>
    </Grid>
    </Grid>
    
  </Paper>
  </Grid>
  </Grid>
  </Box>
  </Box>
  );
}
export default Login;