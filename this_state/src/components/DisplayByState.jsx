import React from 'react'

const DisplayByState = (props) => {
  return(
    <div className="main">
    {props.names.map(x=> (
      <div
      className="block"
      key={x.id}
      style={{ backgroundColor: x.party==="R" ? "red" : "blue" }}>
        <div className="name">{x.last_name}, {x.first_name}</div>
        <div>{x.party}</div>
        <div>Next election: {x.next_election}</div>
        <div>Rep ID:</div>
        <div className="id">{x.id}</div>
      </div>
    ))}
    </div>
  )
}

export default DisplayByState;
