import React from 'react';
import PropTypes from 'prop-types';

function Anchor({ name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
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
