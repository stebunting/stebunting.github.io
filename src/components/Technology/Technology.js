import React from 'react';
import { hot } from 'react-hot-loader';

function TechnologyDetail({ name }) {
  function handler() {
    console.log('handled');
  }

  return (
    <div className="project" onClick={handler} onKeyDown={handler} role="link" tabIndex={0}>
      <div className="projectTitle">{name}</div>
    </div>
  );
}

function Technology() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        &nbsp;Technology
      </h2>

      <TechnologyDetail name="code" />
    </div>
  );
}

export default hot(module)(Technology);
