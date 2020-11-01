import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TechnologyDetail from './TechnologyDetail';
import TechnologyButtons from './TechnologyButtons';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function Technology({ data }) {
  const [visibleElement, setVisibleElement] = useState(data[0].type);
  const [leavingElement, setLeavingElement] = useState('');
  const [isOpen, setIsOpen] = useState(null);
  const [isOpeningOrClosing, setIsOpeningOrClosing] = useState(false);

  function handleClick(event) {
    const id = event.target.id.includes('Button')
      ? event.target.id.replace('Button', '')
      : visibleElement;

    const opening = !isOpen;
    const closing = isOpen && visibleElement === id;
    const newElement = visibleElement === id ? visibleElement : id;
    const leaving = closing ? '' : leavingElement;

    setIsOpeningOrClosing(opening || closing);
    setIsOpen(closing || opening ? !isOpen : isOpen);
    setLeavingElement(newElement !== visibleElement ? visibleElement : leaving);
    setVisibleElement(newElement);
  }

  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Technology" />
      </h2>
      <TechnologyDetail
        open={isOpen}
        visibleElement={visibleElement}
        leavingElement={leavingElement}
        isOpeningOrClosing={isOpeningOrClosing}
        data={data}
        handleClick={handleClick}
      />
      <TechnologyButtons
        technologies={data.map((tech) => tech.type)}
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
