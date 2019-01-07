import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/matches';
import { deleteMatch } from '../services/deleteMatch';
import { updateMatch } from '../services/updateMatch';

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
      <div>
        <div>Edit Form: {match.title}</div>
        <form onSubmit={this.handleUpdate}>
          <label htmlFor= 'title'>Title</label>
          <input
            type='text'
            name='title'
            value= {title}
            id='title'
            onChange={this.handleChange} />
          <label htmlFor= 'date'>Date< /label>
          <input
            type='date'
            name='date'
            value= {date}
            id='date'
            onChange={this.handleChange} />
          <label htmlFor= 'location'>Location< /label>
          <input
            type='text'
            name='date'
            value= {location}
            id='date'
            onChange={this.handleChange} />
          <label htmlFor= 'team'>Team< /label>
          <input
            type='text'
            name='team'
            value={team}
            id={team}
            onChange={this.handleChange} />
          <input type='submit' value='Update Match' />
          < /form>
      </div>
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
        <h3>This are your events: </h3>
        <button onClick={this.logOut}>Log Out</button>
        <ul>
          {matches.map(match => (
            <div
              key={match.id}
              className='activity-container'
              onClick={() => this.updateFocusMatch(match.id)}>
              <h3>{match.title}</h3>
              <h4>{match.date}</h4>
              <h4>{match.location}</h4>
              <h4>{match.team}</h4>
              <button id={match.id} onClick={this.handleDelete}>Delete</button>
            </div>
          ))}
        </ul>
        {focusMatch !== null && this.renderFocusMatch() }
      </div>
    );
  }
}
