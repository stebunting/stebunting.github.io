import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from '../../helpers/Typewriter/Typewriter';

function Projects({ data }) {
  const elements = data.map((project) => (
    <div className="project" key={project.name}>
      <div className="projectTitle">{project.name}</div>
    </div>
  ));

  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Projects" />
      </h2>
      <div className="detailContainer">
        {elements}
      </div>
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
