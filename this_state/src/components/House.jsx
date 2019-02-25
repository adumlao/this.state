import React from 'react';

const House = (props) => {
    return(
      <div>
      <h2>2018 House of Representatives Scorecard</h2>
      <div className="main">
      {props.names.map(x=> (
        <div className="block" key={x.id}>
          <div className="name">{x.last_name}, {x.first_name}</div>
          <div>{x.state}, {x.party}</div>
          <div>{x.chamber}</div>
          <div>Missed: {x.missed_votes}, Pct: {x.missed_votes_pct}</div>
          <div>Total: {x.total_votes}</div>
          <div>Votes with party: {x.votes_with_party_pct}</div>
        </div>
      ))}
      </div>
      </div>
    )
}

export default House;
