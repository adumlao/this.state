import React from 'react'

const DisplayByState = (props) => {
  return(
    <div>
    {props.names.map(x=> (
      <div
      className="specific-block"
      key={x.id}>
        <div className="state-search">
          <div>{x.last_name}, {x.first_name}</div>
          <div className="partybox-search"
          style={{ backgroundColor: x.party==="R" ? "#ee252c" : "#123cf4" }} />
        </div>
        <div className="bio">
          <div className="id">{x.id}</div>
          <div>{x.party}</div>
          <div>Next election: {x.next_election}</div>
          <div>Rep ID:</div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default DisplayByState;
