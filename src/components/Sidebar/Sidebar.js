import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Sidebar.css';

// Render an expander arrow
function Arrow({ expanded, clickHandler }) {
  const classes = expanded ? '' : 'menuFolded';
  return (
    <svg className={classes} onClick={clickHandler} width="12" height="12" viewBox="0 0 306 306">
      <polygon
        className="arrow"
        points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
      />
    </svg>
  );
}
Arrow.propTypes = {
  expanded: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired
};

// Single Menu Item
function MenuItem({
  external, link, name, lastItem
}) {
  const tag = external
    ? <a href={link} target="_blank" rel="noreferrer">{name}</a>
    : <Link to={link}>{name}</Link>;
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

function Menu({ name, children }) {
  const [expanded, setExpanded] = useState(true);
  const classes = expanded ? 'navList' : 'navList navListFolded';

  return (
    <ul>
      <li>
        <Arrow expanded={expanded} clickHandler={() => setExpanded(!expanded)} />
        <span className="keyword">const</span>
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

// Navigation Bar
function NavBar() {
  return (
    <nav>
      <Menu name="main">
        <MenuItem link="about" name="about" />
        <MenuItem link="projects" name="projects" />
        <MenuItem link="technology" name="technology" />
        <MenuItem link="cv" name="cv" />
        <MenuItem link="contact" name="contact" lastItem />
      </Menu>
      <Menu name="external">
        <MenuItem external link="https://www.linkedin.com/in/stevebunting/" name="linkedIn" />
        <MenuItem external link="https://github.com/stebunting" name="gitHub" />
        <MenuItem external link="https://stackoverflow.com/users/7440624/steve-bunting" name="stackOverflow" />
        <MenuItem external link="https://app.pluralsight.com/profile/stebunting" name="pluralsight" lastItem />
      </Menu>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h1><Link to="/">Steve Bunting</Link></h1>
      <NavBar />
    </div>
  );
}

export default Sidebar;
