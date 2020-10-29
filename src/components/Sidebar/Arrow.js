import React from 'react';
import PropTypes from 'prop-types';
import css from './Sidebar.module.css';

// Component to render an arrow
// Points to right when menu closed, points down when menu open
function Arrow({ id, expanded, clickHandler }) {
  const classes = expanded ? undefined : css.menuFolded;
  return (
    <svg className={classes} onClick={() => clickHandler(id)} width="12" height="12" viewBox="0 0 306 306">
      <polygon
        className={css.arrow}
        points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
      />
    </svg>
  );
}
Arrow.propTypes = {
  id: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default Arrow;
