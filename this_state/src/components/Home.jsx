import React from 'react';


const DisplayVotes = (props) => {
  return(
    <div>
      <h2>Recently Passed Bills</h2>
      <div className="main">
      {props.votes.map(x=> (
        x.description !== "" ?
        (<div className="block" key={x.id}>
          <div className="name">{x.bill.title}</div>
          <div>{x.bill.bill_id}</div>
          <div>Chamber: {x.chamber}</div>
          <div>Result: {x.result}</div>
          <div>Latest Action: {x.bill.latest_action}</div>
          <div>{x.date}</div>
          <div>{x.description}</div>
          <div>Democratic Yes: {x.democratic.yes}, No: {x.democratic.no}</div>
          <div>Republican Yes: {x.republican.yes}, No: {x.republican.no}</div>
          <div>Total Yes: {x.total.yes}, No: {x.total.no}</div>
          <a className="presslink" href={x.url} target="_blank" rel="noopener noreferrer">Complete Breakdown</a>
        </div>) : null
      ))}
    </div>
    </div>
  )
}

export default DisplayVotes;
