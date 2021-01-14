// Requirements
import React, { ReactElement } from 'react';

// Types
import { Technology } from '../../types/Technology';

// Components
import TechnologyDetailElement from './TechnologyDetailElement';
import TechnologyButtons from './TechnologyButtons';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import Dropdown from '../Dropdown/Dropdown';

interface Props {
  data: Array<Technology>
}

function Technology(props: Props): ReactElement {
  const { data } = props;

  return (
    <div className="main">
      <Typewriter text="Technology" />
      <Dropdown
        data={data}
        DetailElement={TechnologyDetailElement}
        ButtonElement={TechnologyButtons}
      />
    </div>
  );
}

export default Technology;
