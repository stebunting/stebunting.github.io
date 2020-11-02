import React from 'react';
import PropTypes from 'prop-types';
import css from './CV.module.less';

function Anchor({ name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={css.cvAnchor}
    >
      {name}
    </a>
  );
}
Anchor.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Anchor;
