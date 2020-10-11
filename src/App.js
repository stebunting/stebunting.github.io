import React from 'react';
import { hot } from 'react-hot-loader';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default hot(module)(App);
