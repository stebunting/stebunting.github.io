import React, { useState, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import DropdownDetail from './DropdownDetail';
import css from './Dropdown.module.less';

function Dropdown({ data, detailElement, buttonElement }) {
  const [visibleElement, setVisibleElement] = useState(data[0].name);
  const [leavingElement, setLeavingElement] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isOpeningOrClosing, setIsOpeningOrClosing] = useState(false);

  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    function windowUpdated() {
      setElementHeight(ref.current.scrollHeight);
    }
    window.addEventListener('resize', windowUpdated);
    windowUpdated();

    return () => window.removeEventListener('resize', windowUpdated);
  });

  function handleClick(event) {
    let id;
    let updateState = true;
    if (event.target.id.includes('Button')) {
      id = event.target.id.replace('Button', '');
    } else if (event.target.id.includes('Link')) {
      updateState = false;
    } else {
      id = visibleElement;
    }

    if (updateState) {
      const opening = !isOpen;
      const closing = isOpen && visibleElement === id;
      const newElement = visibleElement === id ? visibleElement : id;
      const leaving = closing ? '' : leavingElement;

      setIsOpeningOrClosing(opening || closing);
      setIsOpen(closing || opening ? !isOpen : isOpen);
      setLeavingElement(newElement !== visibleElement ? visibleElement : leaving);
      setVisibleElement(newElement);
    }
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
        ref={ref}
        style={{ height: isOpen ? elementHeight : 0 }}
      >
        {data.map((item) => (
          <DropdownDetail
            key={`${item.name}Detail`}
            item={item}
            isOpeningOrClosing={isOpeningOrClosing}
            visible={item.name === visibleElement}
            leaving={item.name === leavingElement}
            detailElement={detailElement}
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
  buttonElement: PropTypes.elementType.isRequired
};

export default Dropdown;
