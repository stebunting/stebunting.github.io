import React from 'react';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function PageNotFound() {
  return (
    <div className="main">
      <Typewriter text="404" />
      <p>Page Not Found.</p>
    </div>
  );
}

export default PageNotFound;
