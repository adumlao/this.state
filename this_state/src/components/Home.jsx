import React from 'react';


const DisplayVotes = (props) => {
  return(
    <div>
      <h2>Most Recent Legislation</h2>
      <div className="main">
      {props.votes.map(x=> (
        x.description !== "" ?
        (<div className="block" key={x.id}>
          <div className="headline">{x.bill.title}</div>
          <div className="details">
            <div>Bill ID: {x.bill.bill_id}</div>
            <div>Chamber: {x.chamber}</div>
            <div>Sponsor ID: <span>{x.bill.sponsor_id}</span></div>
            <div>Result: {x.result}</div>
            <div>Latest Action: {x.bill.latest_action}</div>
            <div>On: {x.date}</div>
          </div>
          <div className="tally">
            <div className="bill-description">{x.description}</div>
            <div>Democrat Yes: {x.democratic.yes} / No: {x.democratic.no}</div>
            <div>Republican Yes: {x.republican.yes} / No: {x.republican.no}</div>
            <div>Total Yes: {x.total.yes} / No: {x.total.no}</div>
            <a className="presslink" href={x.url} target="_blank" rel="noopener noreferrer">Click here for Complete Breakdown</a>
          </div>
        </div>) : null
      ))}
    </div>
    </div>
  )
}

export default DisplayVotes;
