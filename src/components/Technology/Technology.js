import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function TechnologyDetail({ name }) {
  const [open, setOpen] = useState(false);

  function clickHandler() {
    setOpen(!open);
  }

  const classes = open ? 'project project-open' : 'project';
  return (
    <div
      className={classes}
      onClick={clickHandler}
    >
      <div className="projectTitle">{name}</div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  name: PropTypes.string.isRequired
};

function Technology() {
  const retValue = (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <div className="detailContainer">

        <TechnologyDetail name="code" />
        <TechnologyDetail name="frameworks" />
      </div>
    </div>
  );
  return retValue;
}

export default Technology;
