import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.less';

function Input({
  type, name, value, valid, onChange
}) {
  return (
    <div className={css.formElement}>
      <label htmlFor={name}>
        <span className={css.labelText}>{`const ${name} =`}</span>
        {React.createElement(
          type === 'textarea' ? 'textarea' : 'input',
          {
            onChange,
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
Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Input;
