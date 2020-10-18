import React from 'react';
import TechnologyDetail from './TechnologyDetail';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function Technology() {
  const order = [
    <TechnologyDetail name="code" />,
    <TechnologyDetail name="frameworks" />,
    <TechnologyDetail name="deployment" />
  ];

  const retValue = (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <div className="detailContainer">
        {order}
      </div>
    </div>
  );
  return retValue;
}

export default Technology;
