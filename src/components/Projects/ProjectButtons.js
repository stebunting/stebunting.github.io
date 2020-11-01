import React from 'react';
import PropTypes from 'prop-types';
import css from './Project.module.css';

function ProjectButtons({ projects, handleClick }) {
  return (
    <div className={css.buttons}>
      {projects.map((project) => (
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
  projects: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired
};

export default ProjectButtons;
