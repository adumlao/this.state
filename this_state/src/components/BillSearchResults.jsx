import React from 'react';

const BillSearchResults = (props) => {
  return(
    <div>
      <div className="main">
      {props.keyword.map(x=> (
        <div className="block" key={x.id}>
          <div className="name">{x.short_title}</div>
          <div>{x.number}</div>
          <div>Date Introduced: {x.introduced_date}</div>
          <div>Sponsor: {x.sponsor_name}, {x.sponsor_party}, {x.sponsor_state} (ID: {x.sponsor_id})</div>
          <div>Full Title: {x.title}</div>
          {x.active === true ? <div>Active Bill</div> : <div>Bill not Active</div>}
          <div>{x.summary}</div>
          <div>Latest Major Action: {x.latest_major_action}</div>
          <div>On: {x.latest_major_action_date}</div>
          <a className="presslink" href={x.congressdotgov_url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
    </div>
  )

}

export default BillSearchResults;
