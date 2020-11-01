import React from 'react';
import PropTypes from 'prop-types';
import TechnologyDetailElement from './TechnologyDetailElement';
import TechnologyButtons from './TechnologyButtons';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import Dropdown from '../Dropdown/Dropdown';

function Technology({ data }) {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <Dropdown
        data={data}
        detailElement={TechnologyDetailElement}
        buttonElement={TechnologyButtons}
      />
    </div>
  );
}
Technology.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired
};

export default Technology;
