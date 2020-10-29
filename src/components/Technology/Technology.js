import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechnologyDetail from './TechnologyDetail';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function Technology({ data }) {
  const [openElement, setOpenElement] = useState(null);

  function handleClick(event) {
    const { id } = event.target;
    setOpenElement(openElement === id ? null : id);
  }

  const compareFunction = (a, b) => {
    if (a.type === openElement) return -1;
    if (b.type === openElement) return 1;
    return 0;
  };

  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <div className="detailContainer">
        {data.sort(compareFunction).map((tech) => (
          <TechnologyDetail
            key={tech.type}
            data={tech}
            open={openElement === tech.type}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
}
Technology.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired
};

export default Technology;
