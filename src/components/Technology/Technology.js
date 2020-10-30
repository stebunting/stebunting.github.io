import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechnologyDetail from './TechnologyDetail';
import TechnologyButtons from './TechnologyButtons';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function Technology({ data }) {
  const [detailElement, setDetailElement] = useState(data[0].type);
  const [open, setOpen] = useState(false);

  function handleClick(event) {
    const id = event.target.id.replace('Button', '');
    setOpen(detailElement === id || !open ? !open : open);
    setDetailElement(detailElement === id ? detailElement : id);
  }

  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <TechnologyDetail
        open={open}
        data={data.filter((tech) => tech.type === detailElement)}
      />
      <TechnologyButtons
        data={data}
        handleClick={handleClick}
      />
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
