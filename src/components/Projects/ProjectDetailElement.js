import React from 'react';
import PropTypes from 'prop-types';
import css from './Project.module.css';

function ProjectDetailElement({
  data,
  isOpeningOrClosing,
  visible,
  leaving
}) {
  const classes = [css.detailElement];
  if (visible) {
    if (isOpeningOrClosing) {
      classes.push(css.visible);
    } else {
      classes.push(css.entering);
    }
  }
  if (leaving && !isOpeningOrClosing) {
    classes.push(css.leaving);
  }
  return (
    <div className={classes.join(' ')}>
      <div className={css.title}>
        {data.name}
      </div>
      <div className={css.description}>
        {data.description}
      </div>
    </div>
  );
}
ProjectDetailElement.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    github: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  isOpeningOrClosing: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  leaving: PropTypes.bool.isRequired
};

export default ProjectDetailElement;
