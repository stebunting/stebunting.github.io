// Requirements
import React, { ReactElement } from "react";

// Types
import { Project } from "../../types/Project";

// Components
import Typewriter from "../../helpers/Typewriter/Typewriter";
import ProjectDetailElement from "./ProjectDetailElement";
import ProjectButtons from "./ProjectButtons";
import Dropdown from "../Dropdown/Dropdown";

interface Props {
  data: Array<Project>;
}

function Projects(props: Props): ReactElement {
  const { data } = props;

  return (
    <div className="main">
      <Typewriter text="Projects" />
      <Dropdown
        data={data}
        DetailElement={ProjectDetailElement}
        ButtonElement={ProjectButtons}
      />
    </div>
  );
}

export default Projects;
