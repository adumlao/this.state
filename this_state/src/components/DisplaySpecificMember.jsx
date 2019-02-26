import React from 'react'

const DisplaySpecificMember = (props) => {
  return(
    <div className="main">
    {props.names.map(x=> (
      <div className="block" key={x.id}>
        <div className="name">{x.last_name}, {x.first_name}</div>
        <div>{x.current_party}</div>
        <div>phone: {x.roles[0].phone}</div>
        <div>twitter: {x.twitter_account}</div>
        <div>facebook: {x.facebook_account}</div>
        <div>website: {x.url}</div>
        {x.roles[0].contact_form === null ? null : (<div>email: {x.roles[0].contact_form}</div>)}
        <div>2019 Scorecard:</div>
        <div>Missed Votes: {x.roles[0].missed_votes_pct}</div>
        <div>Votes with party percentage: {x.roles[0].votes_with_party_pct}</div>
      </div>
    ))}
    </div>
  )
}

export default DisplaySpecificMember;
