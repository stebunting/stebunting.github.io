import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Typewriter({ text }) {
  function getDelay() {
    const min = 80;
    const max = 500;
    return Math.floor((Math.random() * (max - min)) + min);
  }

  const [value, setValue] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timerId;
    if (index < text.length) {
      timerId = setTimeout(() => {
        setValue(text.slice(0, index + 1));
        setIndex(index + 1);
      }, getDelay());
    }
    return () => clearInterval(timerId);
  }, [index]);

  return <h2>{value}</h2>;
}
Typewriter.propTypes = {
  text: PropTypes.string.isRequired
};

export default Typewriter;
