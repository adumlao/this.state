import React from 'react'

const DisplayByState = (props) => {
  return(
    <div div className="reps">
    {props.names.map(x=> (
      <div
      className="politician-block"
      key={x.id}>
        <div className="block-header">2019 Congress</div>
        <div className="state-search">
          <div>{x.last_name}, {x.first_name}</div>
          <div className="partybox-search"
          style={{ backgroundColor: x.party==="R" ? "#ee252c" : "#123cf4" }} />
        </div>
        <div className="bio">
          <div>{x.party}</div>
          <div>Next election: {x.next_election}</div>
          <div>Rep ID:
          <input
            onClick={props.submitSpecificSenator}
            type="submit"
            value={x.id}
          />
          </div>
        </div>
      </div>
    ))}
    </div>
  )
}

export default DisplayByState;
