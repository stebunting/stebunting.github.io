import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from './Menu';
import MenuItem from './MenuItem';

// Function to render menu sidebar
function Sidebar() {
  return (
    <div className="sidebar">
      <h1><NavLink to="/">Steve Bunting</NavLink></h1>
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
    </div>
  );
}

export default Sidebar;
