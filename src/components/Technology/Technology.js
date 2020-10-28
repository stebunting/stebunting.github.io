import React from 'react';
import PropTypes from 'prop-types';
import TechnologyDetail from './TechnologyDetail';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function Technology({ data }) {
  const elements = data.map((tech) => (
    <TechnologyDetail name={tech.type} key={tech.type} />
  ));

  const retValue = (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <div className="detailContainer">
        {elements}
      </div>
    </div>
  );
  return retValue;
}
Technology.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

export default Technology;
