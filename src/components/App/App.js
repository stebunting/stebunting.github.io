import React from 'react';

import Typewriter from '../../helpers/Typewriter/Typewriter';

function App() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Msfain" />
      </h2>
    </div>
  );
}

export default App;
