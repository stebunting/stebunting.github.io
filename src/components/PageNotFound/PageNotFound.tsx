// Requirements
import React, { ReactElement } from "react";

// Components
import Typewriter from "../../helpers/Typewriter/Typewriter";

function PageNotFound(): ReactElement {
  return (
    <div className="main">
      <Typewriter text="404" />
      <p>Page Not Found.</p>
    </div>
  );
}

export default PageNotFound;
