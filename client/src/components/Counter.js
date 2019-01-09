import React from 'react';

export default function Counter(props){
  return(
    <div className='counter'>
      <h3>{props.playersCount}</h3>
    </div>
  )
}
