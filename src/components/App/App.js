import React from 'react';
import { hot } from 'react-hot-loader';

function App() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        &nbsp;Main
      </h2>
    </div>
  );
}

export default hot(module)(App);
