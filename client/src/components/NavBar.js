import React from 'react';

import { Link } from 'react-router-dom';
import { IoLogoDribbble } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { IoIosContact } from "react-icons/io";
import { IoIosKey } from "react-icons/io";
import { IoIosPersonAdd } from "react-icons/io";

export default function NavBar(props){
  return(
    <nav className='navBar'>
      <Link to='/'><IoLogoDribbble className='navIcons' />Home</Link>
      <Link to='/auth'><IoIosKey className='navIcons' />Login</Link>
      <Link to='/register'><IoIosPersonAdd className='navIcons' />Register</Link>
      <Link to='/profile'><IoIosContact className='navIcons' />Profile</Link>
      <Link to='/addmatch'><IoMdCalendar className='navIcons' />Add Match</Link>
    </nav>
  );
}
