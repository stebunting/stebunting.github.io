import React from 'react';
import { hot } from 'react-hot-loader';

import NavBar from './components/NavBar/NavBar';

function CV() {
  return (
    <div>
      <NavBar />
      <h1>CV</h1>
    </div>
  );
}

export default hot(module)(CV);
