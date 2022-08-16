import React from 'react'
import Grid from '@material-ui/core/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import {
  MemoryRouter,
  Route,
  Routes,
  Link,
  matchPath,
  useLocation,
} from 'react-router-dom';



const  Navbar = () => {
  
  
  return (
    // <nav className='navbar'>
    //     <NavLink to='/'>Home</NavLink>
    //     <NavLink to='/about'>about</NavLink>
    //     <NavLink to='/login'>Login</NavLink>
    //     <NavLink to='/dasboard'>Dashboard</NavLink>
    //     <NavLink to='/products'>Products</NavLink>
    // </nav>
    <Grid container 
          spacing={2}
          direction={'row'}
          
          
           >
    <Grid item lg={8}>
    <Tabs >
      <Tab label="Home" value="/home" to="/home" component={Link} />
      <Tab label="Dashboard" value="/dasboard" to="/dasboard" component={Link} />
      <Tab label="Login" value="/login" to="/login" component={Link} />
      <Tab label="Products" value="/products" to="/products" component={Link} />
      <Tab label="About" value="/about" to="/about" component={Link} />
      <Tab label="Registration" value="/registration" to="/registration" component={Link} />
    </Tabs>
    </Grid>
    </Grid>
  )
}

export default Navbar