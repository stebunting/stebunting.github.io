import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DropdownDetail from './DropdownDetail';
import css from './Dropdown.module.less';

function Dropdown({
  data,
  detailElement,
  buttonElement,
  styleOpen,
  styleClosed
}) {
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

  let classes = [css.detail];
  if (isOpen != null) {
    if (isOpen) classes = [...classes, css.open, styleOpen];
    if (!isOpen) classes = [...classes, css.closed, styleClosed];
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
          <DropdownDetail
            key={`${item.name}Detail`}
            item={item}
            isOpeningOrClosing={isOpeningOrClosing}
            visible={item.name === visibleElement}
            leaving={item.name === leavingElement}
            detailElement={detailElement}
            styleOpen={styleOpen}
            styleClosed={styleClosed}
          />
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
  buttonElement: PropTypes.elementType.isRequired,
  styleOpen: PropTypes.string.isRequired,
  styleClosed: PropTypes.string.isRequired
};

export default Dropdown;
