import React from 'react';
import { hot } from 'react-hot-loader';

import NavBar from './components/NavBar/NavBar';

function About() {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
    </div>
  );
}

export default hot(module)(About);
