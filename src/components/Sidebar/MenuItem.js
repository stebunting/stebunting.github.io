import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Sidebar.module.less';

// Function to render a single menu item
function MenuItem({
  external, link, name, lastItem
}) {
  const tag = external
    ? <a href={link} target="_blank" rel="noreferrer">{name}</a>
    : <NavLink to={link} activeClassName={css.activePage}>{name}</NavLink>;
  return (
    <li>
      &apos;
      {tag}
      &apos;
      {lastItem ? '' : ','}
    </li>
  );
}
MenuItem.propTypes = {
  external: PropTypes.bool,
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastItem: PropTypes.bool
};
MenuItem.defaultProps = {
  external: false,
  lastItem: false
};

export default MenuItem;
