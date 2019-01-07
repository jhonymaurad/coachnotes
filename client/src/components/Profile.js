import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/matches';
import { deleteMatch } from '../services/deleteMatch';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      matches: [],
      redirectToAuth: false
    }
    this.logOut = this.logOut.bind(this);
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
    getMyMatches();
  }

  render(){
    if(this.state.redirectToAuth || !localStorage.getItem('token')){
      return(
        <Redirect to="/auth"/>
      )
    }
    return(
      <div>
        <h2>Welcome Back </h2>
        <h3>This are your events: </h3>
        <button onClick={this.logOut}>Log Out</button>
        <ul>
          {this.state.matches.map(match => (
            <div key={match.id} className='activity-container'>
              <h3>{match.title}</h3>
              <h4>{match.date}</h4>
              <h4>{match.location}</h4>
              <h4>{match.team}</h4>
              <button id={match.id} onClick={this.handleDelete}>Delete</button>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
