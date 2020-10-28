import React from 'react';
import PropTypes from 'prop-types';

function TechnologyItem({ item }) {
  const image = item.imgUrl != null
    ? (
      <img
        src={`images/technologies/${item.imgUrl}`}
        alt={`${item.name} Logo`}
        height={40}
      />
    ) : '';

  return (
    <div className="projectItem">
      {image}
      {item.name}
    </div>
  );
}
TechnologyItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string
  }).isRequired
};

export default TechnologyItem;
