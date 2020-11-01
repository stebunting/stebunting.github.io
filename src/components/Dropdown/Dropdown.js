import React, { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Dropdown.module.css';

function Dropdown({ data, detailElement, buttonElement }) {
  const [visibleElement, setVisibleElement] = useState(data[0].name);
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

  const classes = [css.detail];
  if (isOpen != null) {
    if (isOpen) classes.push(css.open);
    if (!isOpen) classes.push(css.closed);
  }

  return (
    <>
      <div
        className={classes.join(' ')}
        onClick={handleClick}
        onKeyDown={(event) => {
          if (event.key === ' ') handleClick(event);
        }}
        role="button"
        tabIndex="0"
      >
        {data.map((item) => (
          React.createElement(detailElement, {
            data: item,
            key: `${item.name}Detail`,
            isOpeningOrClosing,
            visible: item.name === visibleElement,
            leaving: item.name === leavingElement
          })
        ))}
      </div>
      {React.createElement(buttonElement, {
        data: data.map((item) => item.name),
        handleClick
      })}
    </>
  );
}
Dropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  detailElement: PropTypes.elementType.isRequired,
  buttonElement: PropTypes.elementType.isRequired
};

export default Dropdown;
