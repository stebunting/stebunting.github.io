import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

function Typewriter({ text }) {
  function getDelay() {
    const min = 50;
    const max = 500;
    return Math.floor((Math.random() * (max - min)) + min);
  }

  const [value, setValue] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setValue(text.slice(0, index + 1));
        setIndex(index + 1);
      }, getDelay());
    }
  }, [index]);
  return value;
}
Typewriter.propTypes = {
  text: PropTypes.string.isRequired
};

export default Typewriter;
