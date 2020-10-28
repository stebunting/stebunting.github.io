import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Sidebar.module.css';
import Arrow from './Arrow';

// Function to render a sidebar menu wrapper
function Menu({ name, children }) {
  const [expanded, setExpanded] = useState(true);
  const classes = expanded ? css.navList : [css.navList, css.navListFolded].join(' ');

  return (
    <ul>
      <li>
        <Arrow expanded={expanded} clickHandler={() => setExpanded(!expanded)} />
        <span className={css.keyword}>const</span>
        &nbsp;
        {name}
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
  children: PropTypes.node.isRequired
};

export default Menu;
