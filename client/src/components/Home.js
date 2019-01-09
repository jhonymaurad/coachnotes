import React from 'react';
import logo from '../images/sports.png';

export default function Home (){
  return(
    <div className= "homepage">
      <div className= 'logo-header'>
        <h1>Welcome to Coach Notes</h1>
      </div>
      <div className= 'slogan'>
        <h2>For coaches everywhere…A simple website that lets you manage and keep
            track of your matches and training events
        </h2>
      </div>
      <div className='list-left'>
        <h2>Stay Organize</h2>
        <p>Plan and structure activities for your team in a way that’s best for you. Set priorities
        and deadlines.</p>
      </div>
      <div className='logo'>
        <img src={logo} alt="profile"/>
      </div>
      <div className='list-right'>
        <h2>Stay on Track</h2>
        <p>Follow matches and training through every stage. Create and update your team's activities</p>
      </div>
    </div>
  )
}
