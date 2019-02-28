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
        </div>
        <div className="contact">
          {x.roles[0].phone === null ? null :
            (<div>phone: <span>{x.roles[0].phone}</span></div>)}
          {x.twitter_account === null ? null :
            (<div>twitter: <span><a className="links" href={"https://twitter.com/"+x.twitter_account} target="_blank" rel="noopener noreferrer">{x.twitter_account}</a></span></div>)}
          {x.facebook_account === null ? null :
            (<div>facebook: <span><a className="links" href={"https://facebook.com/"+x.facebook_account} target="_blank" rel="noopener noreferrer">{x.facebook_account}</a></span></div>)}
          {x.url === null ? null :
            (<div>website: <span><a className="links" href={x.url} target="_blank" rel="noopener noreferrer">{x.url}</a></span></div>)}
          {x.roles[0].contact_form === null ? null :
            (<div>contact: <span><a className="links" href={x.roles[0].contact_form} target="_blank" rel="noopener noreferrer">{x.roles[0].contact_form}</a></span></div>)}
        </div>
        <div className="stats">
          <div>2019 Scorecard</div>
          <div>Missed Votes Percentage:</div>
          <strong>{x.roles[0].missed_votes_pct}</strong>
          <div>Votes with party percentage:</div>
          <strong>{x.roles[0].votes_with_party_pct}</strong>
        </div>
      </div>
      ))}
    </div>
  );
}

export default DisplaySpecificMember;
