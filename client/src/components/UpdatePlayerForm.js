import React from 'react';

export default function UpdatePlayerForm(props) {
  return(
    <div className="form-container">
      <div><h2>Edit the information for: {props.name}</h2></div>
      <form onSubmit={props.onSubmit} className ="addMatchForm">
        <label htmlFor='name'>Name:</label>
        <input
          id={props.valueName}
          type='text'
          name='name'
          value={props.valueName}
          onChange={props.onChange} />
        <label htmlFor='DOB'>Date of Birth:< /label>
        <input
          id={props.valueDOB}
          type='date'
          name='DOB'
          value={props.valueDOB}
          onChange={props.onChange} />
        <label htmlFor='DOB'>Avatar:< /label>
        <input
          id={props.valueAvatar}
          type='text'
          name='avatar'
          value={props.valueAvatar}
          onChange={props.onChange} />
        <label htmlFor='position'>Position:< /label>
        <input
          id={props.valuePosition}
          type='text'
          name='position'
          value={props.valuePosition}
          onChange={props.onChange} />
        <label htmlFor='position'>Team:< /label>
        <input
          id={props.valueTeam}
          type='text'
          name='team'
          value={props.valueTeam}
          onChange={props.onChange} />
        <input type='submit' value='Update Player' />
      < /form>
    </div>
  )
}
