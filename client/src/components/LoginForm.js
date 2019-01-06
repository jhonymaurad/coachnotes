import React from 'react';

export default function LoginForm(props){
  return(
    <form
      className='addMatchForm'
      onSubmit={props.handleLogin}
    >
      <h2>Log In</h2>
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
