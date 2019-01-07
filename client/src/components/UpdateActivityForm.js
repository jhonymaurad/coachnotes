import React from 'react';

export default function UpdateActivityForm (props){
  return(
    <div>
      <div>Edit Form: {props.title}</div>
      <form onSubmit={props.onSubmit}>
        <label htmlFor= 'title'>Title</label>
        <input
          type='text'
          name='title'
          value= {props.valueTitle}
          id='title'
          onChange={props.onChange} />
        <label htmlFor= 'date'>Date< /label>
        <input
          type='date'
          name='date'
          value= {props.valueDate}
          id='date'
          onChange={props.onChange} />
        <label htmlFor= 'location'>Location< /label>
        <input
          type='text'
          name='date'
          value= {props.valueLocation}
          id='date'
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
