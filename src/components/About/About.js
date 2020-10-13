import React from 'react';
import { hot } from 'react-hot-loader';

function About() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        &nbsp;About
      </h2>
    </div>
  );
}

export default hot(module)(About);
