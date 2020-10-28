import React from 'react';
import { PropTypes } from 'prop-types';
import TechnologyItem from './TechnologyItem';

function TechnologyDetail({ data, open, handleClick }) {
  const handleKeyDown = (event) => {
    if (event.key === ' ') handleClick(event);
  };

  const classes = open ? 'project project-open' : 'project';
  const content = open ? data.members.map((x) => <TechnologyItem key={x.name} item={x} />) : '';
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
      <div className="projectContent">
        {content}
      </div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  }).isRequired,
  open: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TechnologyDetail;
