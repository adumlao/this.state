import React from 'react'

const DisplayByState = (props) => {
  return(
    <div className="main">
    {props.names.map(x=> (
      <div className="block" key={x.id}>
        <div className="name">{x.last_name}, {x.first_name}</div>
        <div>{x.party}</div>
        <div>Next election: {x.next_election}</div>
        <div>Twitter: {x.twitter_id}</div>
        <div>Rep ID: {x.id}</div>
      </div>
    ))}
    </div>
  )
}

export default DisplayByState;
