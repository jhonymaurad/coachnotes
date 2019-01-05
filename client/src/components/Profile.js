import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { getMyMatches } from '../services/matches';

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

  render(){
    if(this.state.redirectToAuth || !localStorage.getItem('token')){
      return(
        <Redirect to="/auth"/>
      )
    }
    return(
      <div>
        <h2>Hello User</h2>
        <button onClick={this.logOut}>Log Out</button>
        <ul>
          {this.state.matches.map(match => (
            <div>
              <h3>{match.title}</h3>
              <h4>{match.date}</h4>
              <h4>{match.location}</h4>
              <h4>{match.team}</h4>
              <h4>{match.coach_id}</h4>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}
