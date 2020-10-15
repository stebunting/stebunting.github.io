import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import Typewriter from '../../helpers/Typewriter/Typewriter';
import './Technology.css';

function TechnologyDetail({ name }) {
  const [open, setOpen] = useState(false);

  const classes = open ? 'project project-open' : 'project';
  return (
    <div
      className={classes}
      onClick={() => setOpen(!open)}
    >
      <div className="projectTitle">{name}</div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  name: PropTypes.string.isRequired
};

function Technology() {
  const order = [
    <TechnologyDetail name="code" />,
    <TechnologyDetail name="frameworks" />,
    <TechnologyDetail name="deployment" />
  ];

  const retValue = (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <div className="detailContainer">
        {order}
      </div>
    </div>
  );
  return retValue;
}

export default Technology;
