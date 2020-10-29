import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

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
            style: { color: valid ? '#4f4' : '#f66' }
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
