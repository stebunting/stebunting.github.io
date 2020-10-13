import React from 'react';
import { hot } from 'react-hot-loader';
import { PropTypes } from 'prop-types';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function TechnologyDetail({ name }) {
  function handler() {
    // HANDLED
  }

  return (
    <div className="project" onClick={handler} onKeyDown={handler} role="link" tabIndex={0}>
      <div className="projectTitle">{name}</div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  name: PropTypes.string.isRequired
};

function Technology() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>

      <TechnologyDetail name="code" />
    </div>
  );
}

export default hot(module)(Technology);
