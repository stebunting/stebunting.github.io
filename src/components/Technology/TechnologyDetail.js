import React from 'react';
import PropTypes from 'prop-types';
import TechnologyDetailElement from './TechnologyDetailElement';
import css from './Technology.module.css';

function TechnologyDetail({
  data,
  open,
  isOpening,
  visibleElement,
  leavingElement
}) {
  const classes = {
    open: `${css.technologyDetail} ${css.technologyDetailOpen}`,
    closed: css.technologyDetail
  };

  return (
    <div className={open ? classes.open : classes.closed}>
      {data.map((tech) => (
        <TechnologyDetailElement
          key={`${tech.type}Detail`}
          isOpening={isOpening}
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
  open: PropTypes.bool.isRequired,
  isOpening: PropTypes.bool.isRequired,
  visibleElement: PropTypes.string.isRequired,
  leavingElement: PropTypes.string.isRequired
};

export default TechnologyDetail;
