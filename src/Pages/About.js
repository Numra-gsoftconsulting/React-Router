import React from 'react'
import {Link} from 'react-router-dom';

export default function About() {
  return (
    <div>
   <h1>About</h1>
   <Link to='/home' classname='btn'>
   Home
</Link>
</div>
  )
}
