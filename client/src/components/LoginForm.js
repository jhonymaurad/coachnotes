import React from 'react';

export default function LoginForm(props){
  return(
    <form
      onSubmit={props.handleLogin}
    >
      <h2>Log In</h2>
      <h5>username:</h5>
      <input
        name = 'username'
        onChange={props.handleChange}
        value={props.login.username}
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
