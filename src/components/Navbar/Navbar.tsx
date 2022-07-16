//section for util imports
import React from 'react'
import './Navbar.css'
//import { NavLink } from 'react-router-dom';

//import section for components

// section for functional component
const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
      <ul className='navlist'>
        <li id='lg'>LOGO</li>
        <li>ABOUT</li>
        <li>COMMUNITY</li>
        <li>LOCATION</li>
        <li>OUR MENU</li>
        <li>RECIPES</li>
        <div className='navlogi'>
          <li>CONTACT</li>
          <li>LOGIN</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
