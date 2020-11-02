import React from 'react';
import PropTypes from 'prop-types';
import css from './Project.module.less';

function ProjectButtons({ data, handleClick }) {
  return (
    <div className={css.buttons}>
      {data.map((project) => (
        <button
          key={`${project}Button`}
          id={`${project}Button`}
          type="button"
          className={css.button}
          onClick={handleClick}
        >
          {project}
        </button>
      ))}
    </div>
  );
}
ProjectButtons.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ProjectButtons;
