// Requirements
import React, { ReactElement } from 'react';

// Style
import css from './Contact.module.less';

interface Props {
  type: string,
  name: string,
  value: string,
  valid: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function Input(props: Props): ReactElement {
  const {
    type,
    name,
    value,
    valid,
    handleChange
  } = props;

  return (
    <div className={css.formElement}>
      <label htmlFor={name}>
        <span className={css.labelText}>{`const ${name} =`}</span>
        {React.createElement(
          type === 'textarea' ? 'textarea' : 'input',
          {
            onChange: handleChange,
            id: name,
            name,
            type: type !== 'textarea' ? type : undefined,
            placeholder: 'undefined',
            value,
            className: valid ? css.valid : css.invalid
          }
        )}
      </label>
    </div>
  );
}

export default Input;
