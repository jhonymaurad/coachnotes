import React, { Component } from 'react';
import UpdateActivityForm from './UpdateActivityForm';

import ViewPlayers from './ViewPlayers';
import ViewActivities from './ViewActivities';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/activitiesServices';
import { deleteMatch } from '../services/activitiesServices';
import { updateMatch } from '../services/activitiesServices';

import { GoSignOut } from 'react-icons/go';
import { FaUserFriends } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarPlus } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirectToAuth: false,
    }
    this.logOut = this.logOut.bind(this);
  }

  logOut(e){
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    });
  }


  render(){
    if(this.state.redirectToAuth || !localStorage.getItem('token')){
      return(
        <Redirect to="/auth"/>
      )
    }
    return(
      <div className='profile-container'>
        <div className='profile-header'>
          <h2>Welcome Back </h2>
          <h4>Manage your team's activities and players</h4>
        </div>
        <div>
          <GoSignOut className='navIcons'  onClick={this.logOut}/>
          logOut
        </div>
        <div className='profile-actions'>
          <div className='userViews'>
            <Link to='/ViewActivities'><FaCalendarAlt className='navIcons' /></Link>
            View Activities
          </div>
          <div className='userViews'>
            <Link to='/viewPlayers'><FaUserFriends className='navIcons' /></Link>
            View Players
          </div>
          <div className='userViews'>
            <Link to='/addmatch'><FaCalendarPlus className='navIcons' /></Link>
            Add Activity
          </div>
          <div className='userViews'>
            <Link to='/addplayer'><FaUserPlus className='navIcons' /></Link>
            Add Player
          </div>
        </div>
      </div>
    );
  }
}
