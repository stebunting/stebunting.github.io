import React from 'react';
import PropTypes from 'prop-types';
import css from './Sidebar.module.css';
import Arrow from './Arrow';

// Function to render a sidebar menu wrapper
function Menu({
  name, children, expanded, handleClick
}) {
  const classes = expanded ? css.navList : [css.navList, css.navListFolded].join(' ');

  return (
    <ul>
      <li>
        <span
          className={css.menuDropdown}
          role="button"
          tabIndex="0"
          onClick={() => handleClick(name)}
          onKeyDown={(event) => {
            if (event.key === ' ') handleClick(name);
          }}
        >
          <Arrow expanded={expanded} />
          <span className={css.keyword}>const</span>
          &nbsp;
          {name}
        </span>
        &nbsp;= [
        <ul className={classes}>
          {children}
        </ul>
        ];
      </li>
    </ul>
  );
}
Menu.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default Menu;
