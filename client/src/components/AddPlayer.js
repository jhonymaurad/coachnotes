import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { createPlayer } from '../services/playerServices';

export default class AddPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        "name": '',
        "date_of_birth": '',
        "avatar": '',
        "position": '',
        "team": '',
      },
      redirectToPlayersView: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const{ name, value } = e.target;
    this.setState(prevState =>({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  async handleSubmit(e){
    e.preventDefault();
    const token = localStorage.getItem('token');
    if(this.state.formData){
      const player = await createPlayer(token, this.state.formData)
    }
    this.setState(
      {
        redirectToPlayersView: true
      }
    );
  }

  render(){
    if(this.state.redirectToPlayersView)
    return(
      <Redirect to='/viewPlayers' />
    )
    return(
      <div className="form-container">
          <form onSubmit={this.handleSubmit} className="addMatchForm">
              <label>
                  <h3>Add a new player to your squad</h3>
              </label>
              <label>
                  Name: <br/>
                  <input
                      id="name"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.name}
                      name='name'
                  />
              </label>
              <br/>
              <label>
                  Date of Birth: <br/>
                  <input
                      id="date"
                      type="date"
                      onChange={this.handleChange}
                      value={this.state.date_of_birth}
                      name='date'
                  />
              </label>
              <br />
              <label>
                  Avatar: <br/>
                  <input
                      id="avatar"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.avatar}
                      name='location'
                  />
              </label>
              <br/>
              <label>
                  Position: <br/>
                  <input
                      id="position"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.position}
                      name='team'
                  />
              </label>
              <br/>
              <label>
                  Team: <br/>
                  <input
                      id="team"
                      type="text"
                      onChange={this.handleChange}
                      value={this.state.position}
                      name='team'
                  />
              </label>
              <input type="submit" value="SUBMIT" />
          </form>
      </div>

    )
  }


}
