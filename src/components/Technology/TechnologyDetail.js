import React from 'react';
import { PropTypes } from 'prop-types';

function TechnologyDetail({ data, open, handleClick }) {
  const handleKeyDown = (event) => {
    if (event.key === ' ') handleClick(event);
  };

  const classes = open ? 'project project-open' : 'project';
  const content = open ? data.members.join(', ') : '';
  return (
    <div
      id={data.type}
      className={classes}
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
    >
      <div className="projectTitle">
        {data.type}
      </div>
      <div>
        {content}
      </div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TechnologyDetail;
