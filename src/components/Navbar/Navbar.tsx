//section for util imports
import React from 'react';
import './Navbar.css';
//import { NavLink } from 'react-router-dom';

//import section for components


// section for functional component
const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        <ul className='navlist'>
        <li /* className='navitem' to="" */>LOGO</li>
        <li /* className='navitem' to="" */>ABOUT</li>
        <li /* className='navitem' to="" */>COMMUNITY</li>
        <li /* className='navitem' to="" */>LOCATION</li>
        <li /* className='navitem' to="" */>OUR MENU</li>
        <li /* className='navitem' to="" */>RECIPES</li>
        <div className='lognav'>
            <li /* className='navitem' to="" */>CONTACT</li>
            <li /* className='navitem' to="" */>LOGIN</li>
        </div>
        </ul>
    </div>
  )
}

export default Navbar