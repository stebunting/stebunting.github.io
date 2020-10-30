import React from 'react';
import PropTypes from 'prop-types';
import css from './Technology.module.css';

function TechnologyButtons({ data, handleClick }) {
  return (
    <div className={css.technologyButtons}>
      {data.map((tech) => (
        <button
          key={`${tech.type}Button`}
          id={`${tech.type}Button`}
          type="button"
          className={css.technologyButton}
          onClick={handleClick}
        >
          {tech.type}
        </button>
      ))}
    </div>
  );
}
TechnologyButtons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TechnologyButtons;
