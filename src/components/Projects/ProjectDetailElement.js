import React from 'react';
import PropTypes from 'prop-types';
import css from './Project.module.css';

function ProjectDetailElement({ data, dropdownClasses }) {
  return (
    <div className={[dropdownClasses, css.detailElement].join(' ')}>
      <h3 className={css.title}>{data.name}</h3>
      <div className={css.date}>
        {data.date}
      </div>

      <div className={css.thumb}>
        <img
          src={`images/projects/${data.thumbImg}`}
          alt={`${data.name}`}
          height={200}
        />
      </div>

      <div className={css.description}>
        {data.description}
      </div>

      <h3>Technologies</h3>
      <div className={css.technologies}>
        {data.technologies.join(', ')}
      </div>

      <h3>Links</h3>
      <div className={css.links}>
        {data.links.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noreferrer"
            key={`${data.name}${link.link}`}
          >
            {link.type}
          </a>
        )).reduce((a, b) => [a, ' // ', b])}
      </div>
    </div>
  );
}
ProjectDetailElement.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    thumbImg: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    })).isRequired,
    date: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  dropdownClasses: PropTypes.string.isRequired
};

export default ProjectDetailElement;
