import React from 'react';

const PressRelease = (props) => {
  return(
    <div>
      <h2>Latest Press Releases</h2>
      <div className="main">
      {props.press.map(x=> (
        <div className="block" key={x.id}>
          <div className="press-name">
            <div>From the office of:</div>
            <div>{x.name}</div>
          </div>
          <div className="press-date">
            <div>{x.chamber}, {x.state}, {x.party}</div>
            <div>Last Updated: {x.updated_at}</div>
          </div>
          <div className="release">{x.title}</div>
          <a className="presslink" href={x.url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      ))}
      </div>
    </div>
  );
}

export default PressRelease;
