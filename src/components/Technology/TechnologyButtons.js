import React from 'react';
import PropTypes from 'prop-types';
import css from './Technology.module.less';

function TechnologyButtons({ data, handleClick }) {
  return (
    <div className={css.buttons}>
      {data.map((technology) => (
        <button
          key={`${technology}Button`}
          id={`${technology}Button`}
          type="button"
          className={css.button}
          onClick={handleClick}
        >
          {technology}
        </button>
      ))}
    </div>
  );
}
TechnologyButtons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default TechnologyButtons;
