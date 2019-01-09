import React, {Component} from 'react';
import { register } from '../services/createUser';
import { TiEdit } from "react-icons/ti";
import logo from '../images/sports.png';

export default class RegisterForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      coach: {
        email: '',
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
		if(this.state.coach.email && this.state.coach.password){
			const user = await register(this.state.coach);
		}
  }

  render() {
    return (
      <form
        className="addMatchForm"
        onSubmit={this.handleSubmit}
      >
        <h2>Register  <TiEdit/></h2>
        <img src={logo} alt='logo' style={{width:'150px', alignSelf: 'center'}}/>

        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder='email'
          onChange={this.handleChange}
          value={this.state.email}
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
