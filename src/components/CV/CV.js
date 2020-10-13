import React from 'react';
import { hot } from 'react-hot-loader';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function CV() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="CV" />
      </h2>
    </div>
  );
}

export default hot(module)(CV);
