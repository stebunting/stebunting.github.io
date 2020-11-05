import React from 'react';
import PropTypes from 'prop-types';
import TechnologyItem from './TechnologyItem';
import css from './Technology.module.less';

function TechnologyDetailElement({ data, dropdownClasses }) {
  return (
    <div className={dropdownClasses}>
      <h3 className={css.title}>
        {data.name}
      </h3>
      <div className={css.description}>
        {data.description}
      </div>
      <div className={css.items}>
        {data.members.map((x) => <TechnologyItem key={x.name} item={x} />)}
      </div>
    </div>
  );
}
TechnologyDetailElement.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  }).isRequired,
  dropdownClasses: PropTypes.string.isRequired
};

export default TechnologyDetailElement;
