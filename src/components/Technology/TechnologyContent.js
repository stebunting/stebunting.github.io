import React from 'react';
import PropTypes from 'prop-types';
import TechnologyItem from './TechnologyItem';

function TechnologyContent({ data }) {
  return (
    <>
      <div className="projectDescription">
        {data.description}
      </div>
      <div className="projectContent">
        {data.members.map((x) => <TechnologyItem key={x.name} item={x} />)}
      </div>
    </>
  );
}
TechnologyContent.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  }).isRequired
};

export default TechnologyContent;
