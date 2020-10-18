import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function TechnologyDetail({ name }) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  const classes = open ? 'project project-open' : 'project';
  return (
    <div
      key={name}
      className={classes}
      role="button"
      tabIndex="0"
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
    >
      <div className="projectTitle">{name}</div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  name: PropTypes.string.isRequired
};

export default TechnologyDetail;
