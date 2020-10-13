import React from 'react';
import { hot } from 'react-hot-loader';

function Projects() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        &nbsp;Projects
      </h2>

      <div className="project">
        <div className="projectTitle">whisk.se</div>
      </div>
    </div>
  );
}

export default hot(module)(Projects);
