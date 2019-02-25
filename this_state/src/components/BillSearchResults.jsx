import React from 'react';

const BillSearchResults = (props) => {
  return(
    <div>
      <div className="main">
      {props.keyword.map(x=> (
        <div className="block" key={x.id}>
          <div className="name">{x.short_title}</div>
          <div>Date Introduced: {x.introduced_date}</div>
          <div>Active Bill? {x.active}</div>
          <div>Primary Subject: {x.primary_subject}</div>
          <div>{x.summary}</div>
          <div>Latest Major Action: {x.latest_major_action}</div>
          <div>On: {x.latest_major_action_date}</div>
          <div>House Passage: {x.house_passage}</div>
          <div>Senate Passage: {x.senate_passage}</div>
          <div>Enacted: {x.enacted}</div>
          <div>Vetoed: {x.vetoed}</div>
        </div>
      ))}
    </div>
    </div>
  )

}

export default BillSearchResults;
