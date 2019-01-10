import React from 'react';

import { Link } from 'react-router-dom';
import { IoLogoDribbble } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";

export default function NavBar(props){
  return(
    <nav className='navBar'>
      <Link to='/'><IoLogoDribbble className='navIcons' /><h5 className='navIconsText'>Home</h5></Link>
      <Link to='/auth'><IoIosKey className='navIcons' /><h5 className='navIconsText'>Login</h5></Link>
      <Link to='/register'><IoIosPersonAdd className='navIcons' /><h5 className='navIconsText'>Register</h5></Link>
      <Link to='/profile'><IoIosContact className='navIcons' /><h5 className='navIconsText'>Profile</h5></Link>
    </nav>
  );
}
