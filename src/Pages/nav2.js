import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';



const  Navbar = () => {
  
  return (
    <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/dasboard'>Dashboard</NavLink>
        <NavLink to='/products'>Products</NavLink>
    </nav>
  )
}

export default Navbar