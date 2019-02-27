import React from 'react'

const DisplaySpecificMember = (props) => {
  return(
    <div className="main">
    {props.names.map(x=> (
      <div
      className="specific-block"
      key={x.id}>
        <div className="state-search">
          <div>{x.last_name}, {x.first_name}</div>
          <div className="partybox-search"
          style={{ backgroundColor: x.current_party==="R" ? "#ee252c" : "#123cf4" }} />
          <div>{x.current_party}</div>
        </div>
        <div className="contact">
          <div>phone: <span>{x.roles[0].phone}</span></div>
          <div>twitter: <span>{x.twitter_account}</span></div>
          <div>facebook: <span>{x.facebook_account}</span></div>
          <div>website: <span><a className="links" href={x.url} target="_blank" rel="noopener noreferrer">{x.url}</a></span></div>
          {x.roles[0].contact_form === null ? null : (<div>email: <span>{x.roles[0].contact_form}</span></div>)}
        </div>
        <div className="stats">
          <div>2019 Scorecard</div>
          <div>Missed Votes Percentage:</div>
          <strong>{x.roles[0].missed_votes_pct}</strong>
          <div>Votes with party percentage:</div> <strong>{x.roles[0].votes_with_party_pct}</strong>
        </div>
      </div>
    ))}
    </div>
  )
}

export default DisplaySpecificMember;
