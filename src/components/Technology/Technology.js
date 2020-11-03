import React from 'react';
import PropTypes from 'prop-types';
import TechnologyDetailElement from './TechnologyDetailElement';
import TechnologyButtons from './TechnologyButtons';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import Dropdown from '../Dropdown/Dropdown';
import css from './Technology.module.less';

function Technology({ data }) {
  return (
    <div className="main">
      <Typewriter text="Technology" />
      <Dropdown
        data={data}
        detailElement={TechnologyDetailElement}
        buttonElement={TechnologyButtons}
        styleOpen={css.detailOpen}
        styleClosed={css.detailClosed}
      />
    </div>
  );
}
Technology.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    members: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string
    })).isRequired
  })).isRequired
};

export default Technology;
