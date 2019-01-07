import React, { Component } from 'react';
import UpdateActivityForm from './UpdateActivityForm';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/matches';
import { deleteMatch } from '../services/deleteMatch';
import { updateMatch } from '../services/updateMatch';
import { IoMdCalendar } from "react-icons/io";
import { GoSignOut } from 'react-icons/go';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: [],
      redirectToAuth: false,
      focusMatch: null,
      editFormData: {
        "title": '',
        "date": '',
        "location": '',
        "team": ''
      }
    }
    this.logOut = this.logOut.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  async componentDidMount(){
    const matches = await getMyMatches();
    this.setState({
      matches
    })
  }

  logOut(e){
    localStorage.removeItem('token');
    this.setState({
      redirectToAuth: true
    });
  }

  async handleDelete(e){
    const token = localStorage.getItem('token');
    const match = await deleteMatch(token, e.currentTarget.id);
    const matches = await getMyMatches();
    this.setState(prevState => ({
      ...prevState.matches,
      matches
    }))
  }

  async handleUpdate(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    const match = await updateMatch(token, this.state.focusMatch, this.state.editFormData);
    const matches = await getMyMatches();
    this.setState(prevState => ({
      ...prevState.matches,
      matches
    }))
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState(prevState => ({
      editFormData: {
        ...prevState.editFormData,
        [name] : value
      }
    }));
  }

  renderFocusMatch(){
    const match = this.state.matches.find(el => el.id === this.state.focusMatch)
    const { editFormData } = this.state;
    const {
      title,
      date,
      location,
      team
    } = editFormData;
    return(
      <UpdateActivityForm
        title= {match.title}
        onSubmit={this.handleUpdate}
        onChange={this.handleChange}
        valueTitle={title}
        valueDate={date}
        valueLocation={location}
        valueTeam={team}
      />
    )
  }

  updateFocusMatch(id){
    const data = this.state.matches.find(match => match.id === id);
    this.setState(prevState => ({
      focusMatch: id,
      editFormData: {
        ...prevState.editFormData,
        title: data.title,
        date: data.date,
        location: data.location,
        team: data.team
      }
    }));
  }

  render(){
    if(this.state.redirectToAuth || !localStorage.getItem('token')){
      return(
        <Redirect to="/auth"/>
      )
    }
    const {matches, focusMatch } = this.state;
    return(
      <div>
        <h2>Welcome Back </h2>
        <div className='profile-actions'>
          <Link to='/addmatch'><IoMdCalendar className='navIcons' /></Link>Add Activity
          <GoSignOut onClick={this.logOut} className='navIcons' /> logOut
        </div>
        <h3>This are your events: </h3>
        <p>* If you need to update an activity, click on it and a form will be display at the bottom
         of the page to input the new information for the event</p>
        <ul className='activities-container'>
          {matches.map(match => (
            <div
              key={match.id}
              className='activity'
              onClick={() => this.updateFocusMatch(match.id)}>
              <h3>Type of event:</h3>
              <h4>{match.title}</h4>
              <h3>Date:</h3>
              <h4>{match.date}</h4>
              <h3>Location:</h3>
              <h4>{match.location}</h4>
              <h3>Opposing Team:</h3>
              <h4>{match.team}</h4>
              <button
                id={match.id}
                onClick={this.handleDelete}
                className='deleteButtons'>Delete</button>
            </div>
          ))}
        </ul>
        {focusMatch !== null && this.renderFocusMatch() }
      </div>
    );
  }
}
