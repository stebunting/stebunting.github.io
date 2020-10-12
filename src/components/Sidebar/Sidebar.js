import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Sidebar.css';

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

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <span className="keyword">const</span>
          &nbsp;main = [
        </li>
        <li>
          <ul className="navInternal">
            <MenuItem link="about" name="about" />
            <MenuItem link="projects" name="projects" />
            <MenuItem link="technology" name="technology" />
            <MenuItem link="cv" name="cv" />
            <MenuItem link="contact" name="contact" lastItem />
          </ul>
        </li>
        <li>];</li>
      </ul>
      <ul>
        <li>
          <span className="keyword">const</span>
          {' '}
          external = [
        </li>
        <li>
          <ul className="navInternal">
            <MenuItem external link="https://www.linkedin.com/in/stevebunting/" name="linkedIn" />
            <MenuItem external link="https://github.com/stebunting" name="gitHub" lastItem />
          </ul>
        </li>
        <li>];</li>
      </ul>
    </nav>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="title">Steve Bunting</h1>
      <NavBar />
    </div>
  );
}

export default hot(module)(Sidebar);
