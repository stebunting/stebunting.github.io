import React from 'react';
import PropTypes from 'prop-types';
import TechnologyDetailElement from './TechnologyDetailElement';
import css from './Technology.module.css';

function TechnologyDetail({
  data,
  open,
  isOpeningOrClosing,
  visibleElement,
  leavingElement,
  handleClick
}) {
  const classes = [css.technologyDetail];
  if (open != null) {
    if (open) classes.push(css.open);
    if (!open) classes.push(css.closed);
  }

  return (
    <div
      className={classes.join(' ')}
      id="detail"
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.key === ' ') handleClick(event);
      }}
      role="button"
      tabIndex="0"
    >
      {data.map((tech) => (
        <TechnologyDetailElement
          key={`${tech.type}Detail`}
          isOpeningOrClosing={isOpeningOrClosing}
          visible={tech.type === visibleElement}
          leaving={tech.type === leavingElement}
          data={tech}
        />
      ))}
    </div>
  );
}
TechnologyDetail.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired,
  open: PropTypes.bool,
  isOpeningOrClosing: PropTypes.bool.isRequired,
  visibleElement: PropTypes.string.isRequired,
  leavingElement: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
TechnologyDetail.defaultProps = {
  open: null
};

export default TechnologyDetail;
