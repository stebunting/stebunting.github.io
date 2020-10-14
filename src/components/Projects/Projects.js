import React from 'react';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function Projects() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Projects" />
      </h2>

      <div className="project">
        <div className="projectTitle">whisk.se</div>
      </div>
    </div>
  );
}

export default Projects;
