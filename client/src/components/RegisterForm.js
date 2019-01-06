import React, {Component} from 'react';
import { register } from '../services/createUser';

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      coach: {
        username: '',
        password: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState(prevState => ({
      coach: {
        ...prevState.coach,
        [name]:value
      }
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
		if(this.state.coach.username && this.state.coach.password){
			const user = await register(this.state.coach);
		}
  }

  render() {
    return (
      <form
        className="addMatchForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Register</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder='username'
          onChange={this.handleChange}
          value={this.state.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder='password'
          name="password"
          onChange={this.handleChange}
          value={this.state.password}
        />

        <input type="submit" value="Register" />
      </form>
    )
  }

}
