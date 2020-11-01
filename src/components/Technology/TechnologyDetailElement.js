import React from 'react';
import PropTypes from 'prop-types';
import TechnologyItem from './TechnologyItem';
import css from './Technology.module.css';

function TechnologyDetailElement({
  data,
  isOpeningOrClosing,
  visible,
  leaving
}) {
  const classes = [css.technologyDetailElement];
  if (visible) {
    if (isOpeningOrClosing) {
      classes.push(css.visible);
    } else {
      classes.push(css.entering);
    }
  }
  if (leaving && !isOpeningOrClosing) {
    classes.push(css.leaving);
  }

  return (
    <div className={classes.join(' ')}>
      <div className={css.technologyTitle}>
        {data.type}
      </div>
      <div className={css.technologyDescription}>
        {data.description}
      </div>
      <div className={css.technologyItems}>
        {data.members.map((x) => <TechnologyItem key={x.name} item={x} />)}
      </div>
    </div>
  );
}
TechnologyDetailElement.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  }).isRequired,
  isOpeningOrClosing: PropTypes.bool.isRequired,
  visible: PropTypes.bool.isRequired,
  leaving: PropTypes.bool.isRequired
};

export default TechnologyDetailElement;
