import React from 'react';

const House = (props) => {
    return(
      <div>
      <h2>2018 House of Representatives Scorecard</h2>
      <div className="reps">
      {props.names.map(x=> (
        <div
        className="block"
        key={x.id}
        style={{ backgroundColor: x.party==="R" ? "red" : "blue" }}>
          <div className="name">{x.last_name}, {x.first_name}</div>
          <div>{x.state}, {x.party}</div>
          <div>Missed Votes: {x.missed_votes} / Total: {x.total_votes}</div>
          <div>Pct: {x.missed_votes_pct}</div>
          <div>Votes with party: {x.votes_with_party_pct}</div>
        </div>
      ))}
      </div>
      </div>
    )
}

export default House;
