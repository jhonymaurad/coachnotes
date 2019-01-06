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
        name = 'email'
        onChange={props.handleChange}
        value={props.login.email}
      />
      <br></br>
      <h5>password:</h5>
      <input
        name = 'password'
        onChange ={props.handleChange}
        value={props.login.password}
      />
      <br></br>
      <button type = 'submit'>
        Login
      </button>
    </form>
  )
}
