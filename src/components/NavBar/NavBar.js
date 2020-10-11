import React from 'react';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';

import './NavBar.css';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cv">CV</Link></li>
      </ul>
    </nav>
  );
}

export default hot(module)(NavBar);
