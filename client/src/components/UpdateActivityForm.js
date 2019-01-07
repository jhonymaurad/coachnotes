import React from 'react';

export default function UpdateActivityForm (props){
  return(
    <div className="form-container">
      <div>Edit Form: {props.title}</div>
      <form onSubmit={props.onSubmit} className="addMatchForm">
        <label htmlFor= 'title'>Title</label>
        <input
          type='text'
          name='title'
          value= {props.valueTitle}
          id= {props.valueTitle}
          onChange={props.onChange} />
        <label htmlFor= 'date'>Date< /label>
        <input
          type='date'
          name='date'
          value= {props.valueDate}
          id={props.valueDate}
          onChange={props.onChange} />
        <label htmlFor= 'location'>Location< /label>
        <input
          type='text'
          name='location'
          value= {props.valueLocation}
          id={props.valueLocation}
          onChange={props.onChange} />
        <label htmlFor= 'team'>Team< /label>
        <input
          type='text'
          name='team'
          value={props.valueTeam}
          id={props.valueTeam}
          onChange={props.onChange} />
        <input type='submit' value='Update Match' />
        < /form>
    </div>
  )
}
