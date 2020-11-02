import React from 'react';
import PropTypes from 'prop-types';
import css from './Dropdown.module.less';

function DropdownDetail({
  item,
  isOpeningOrClosing,
  visible,
  leaving,
  detailElement
}) {
  const detailClasses = [css.detailElement];
  if (visible) {
    if (isOpeningOrClosing) {
      detailClasses.push(css.visible);
    } else {
      detailClasses.push(css.entering);
    }
  }
  if (leaving && !isOpeningOrClosing) {
    detailClasses.push(css.leaving);
  }

  return React.createElement(detailElement, {
    data: item,
    key: `${item.name}Detail`,
    dropdownClasses: detailClasses.join(' ')
  });
}
DropdownDetail.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  isOpeningOrClosing: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  leaving: PropTypes.bool.isRequired,
  detailElement: PropTypes.elementType.isRequired
};

export default DropdownDetail;
