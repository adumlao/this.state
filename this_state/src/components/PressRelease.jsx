import React from 'react';

const PressRelease = (props) => {
  return(
    <div>
    <h2>Latest Press Releases</h2>
    <div className="main">
      {props.press.map(x=> (
        <div className="block" key={x.id}>
          <div className="name">{x.name}</div>
          <div>{x.chamber}, {x.state}, {x.party}</div>
          <div>Last Updated: {x.updated_at}</div>
          <div>{x.title}</div>
          <a className="presslink" href={x.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
    </div>
    </div>
  )
}

export default PressRelease;
