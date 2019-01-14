import React, { Component } from 'react';
import UpdateActivityForm from './UpdateActivityForm';

import ViewPlayers from './ViewPlayers';
import ViewActivities from './ViewActivities';

import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/activitiesServices';
import { deleteMatch } from '../services/activitiesServices';
import { updateMatch } from '../services/activitiesServices';
import { IoMdCalendar } from "react-icons/io";
import { GoSignOut } from 'react-icons/go';
import { FiUsers } from "react-icons/fi";


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

        <div  onClick={this.logOut} >
          <GoSignOut className='navIcons'/>
          logOut
        </div>

        <div className='profile-actions'>
          <div className='userViews'>
            <Link to='/ViewActivities'><FiUsers className='navIcons' />View Activities</Link>
          </div>
          <div className='userViews'>
            <Link to='/viewPlayers'><FiUsers className='navIcons' />View Players</Link>
          </div>
          <div className='userViews'>
            <Link to='/addmatch'><IoMdCalendar className='navIcons' />Add Activity</Link>
          </div>
          <div className='userViews'>
            <Link to='/addplayer'><IoMdCalendar className='navIcons' />Add Player</Link>
          </div>
        </div>
      </div>
    );
  }
}
