import React, { Component } from 'react';
import LoginForm from './LoginForm';
import { login } from '../services/auth';
import { Redirect } from 'react-router-dom';

export default class AuthForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        email: '',
        password: ''
      },
      redirectToProfile: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin (e){
    e.preventDefault();
    const tokenData = await login(this.state.credentials);
    console.log(tokenData);
    localStorage.setItem('token', tokenData.jwt);
    this.setState(
      {
        redirectToProfile: true
      }
    );
  }

  handleChange(e){
    const {name, value} = e.target
    this.setState(prevState => (
      {
        credentials: {
          ...prevState.credentials,
          [name] : value
        }
      }
    )
    )
  }

  render(){
    if(this.state.redirectToProfile)
    return(
      <Redirect to="/profile" />
    )
    return(
      <div>
        <LoginForm
          handleChange={this.handleChange}
          handleLogin={this.handleLogin}
          login={this.state.credentials}
        />
      </div>
    )
  }

}
