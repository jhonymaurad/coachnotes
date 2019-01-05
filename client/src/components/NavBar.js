import React from 'react';

import { Link } from 'react-router-dom';
import { IoLogoDribbble } from "react-icons/io";
import { IoMdCalendar } from "react-icons/io";
import { IoIosContact } from "react-icons/io";

export default function NavBar(props){
  return(
    <nav className='navBar'>
      <Link to='/'><IoLogoDribbble className='navIcons' />Home</Link>
      <Link to='/matches'><IoMdCalendar className='navIcons' />Calendar</Link>
      <Link to='/auth'><IoIosContact className='navIcons' />Register / Login</Link>
      <Link to='/profile'><IoIosContact className='navIcons' />Profile</Link>
    </nav>
  );
}
