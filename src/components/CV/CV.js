import React from 'react';
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

export default CV;
