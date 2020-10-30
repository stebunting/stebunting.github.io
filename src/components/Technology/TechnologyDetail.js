import React from 'react';
import PropTypes from 'prop-types';
import TechnologyItem from './TechnologyItem';
import css from './Technology.module.css';

function TechnologyDetail({ open, data }) {
  const classes = {
    open: `${css.technologyDetail} ${css.technologyDetailOpen}`,
    closed: css.technologyDetail
  };

  return (
    <div className={open ? classes.open : classes.closed}>
      <div className={`${css.technologyDetail} ${css.technologyDetailOpen}`}>
        <div className={css.technologyTitle}>
          {data[0].type}
        </div>
        <div className={css.technologyDescription}>
          {data[0].description}
        </div>
        <div className={css.technologyItems}>
          {data[0].members.map((x) => <TechnologyItem key={x.name} item={x} />)}
        </div>
      </div>
    </div>
  );
}
TechnologyDetail.propTypes = {
  open: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired
};

export default TechnologyDetail;
