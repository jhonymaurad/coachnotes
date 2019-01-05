import React from 'react';

import { Link } from 'react-router-dom';

export default function NavBar(props){
  return(
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/matches'>Matches</Link>
      </li>
      <li>
        <Link to='/auth'>Log in / Register</Link>
      </li>
      <li>
        <Link to='/auth'>Profile</Link>
      </li>


    </ul>
  );
}
