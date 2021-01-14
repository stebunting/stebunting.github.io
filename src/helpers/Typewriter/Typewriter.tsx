// Requirements
import React, { useState, useEffect, ReactElement } from 'react';

interface Props {
  text: string
}

function Typewriter(props: Props): ReactElement {
  const { text } = props;

  function getDelay() {
    const min = 80;
    const max = 500;
    return Math.floor((Math.random() * (max - min)) + min);
  }

  const [value, setValue] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    if (index < text.length) {
      timerId = setTimeout(() => {
        setValue(text.slice(0, index + 1));
        setIndex(index + 1);
      }, getDelay());
    }
    return () => clearInterval(timerId);
  }, [text, index]);

  return <h2>{value}</h2>;
}

export default Typewriter;
