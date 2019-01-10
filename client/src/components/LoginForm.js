import React from 'react';
import { GoSignIn } from 'react-icons/go';
import logo from '../images/sports.png';

export default function LoginForm(props){
  return(
    <form
      className='addMatchForm'
      onSubmit={props.handleLogin}
    >
      <h2>Log In    <GoSignIn/></h2>
      <img src={logo} alt='logo' style={{width:'150px', alignSelf: 'center'}}/>
      <h5>email:</h5>
      <input
        type="text"
        name = 'email'
        onChange={props.handleChange}
        value={props.login.email}
      />
      <br></br>
      <h5>password:</h5>
      <input
      type="password"
        name = 'password'
        onChange ={props.handleChange}
        value={props.login.password}
      />
      <br></br>
      <input type = 'submit' value= 'submit' />
    </form>
  )
}
