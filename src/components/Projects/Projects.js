import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import ProjectDetailElement from './ProjectDetailElement';
import ProjectButtons from './ProjectButtons';
import Dropdown from '../Dropdown/Dropdown';

function Projects({
  data
}) {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Projects" />
      </h2>
      <Dropdown
        data={data}
        detailElement={ProjectDetailElement}
        buttonElement={ProjectButtons}
      />
    </div>
  );
}
Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    homepage: PropTypes.string.isRequired,
    github: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
};

export default Projects;
