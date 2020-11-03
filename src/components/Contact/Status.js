import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.less';
import statusMessages from './statusMessages';

function Status({ status }) {
  const getColor = () => {
    if (status === statusMessages.EMAIL_SENT) return css.valid;
    if (status === statusMessages.ERROR) return css.invalid;
    return {};
  };

  return (
    <div className={css.formElement}>
      <label htmlFor="status">
        <span className={css.labelText}>const status =</span>
        <input
          id="status"
          name="status"
          type="text"
          value={status}
          placeholder="undefined"
          className={getColor()}
          readOnly
        />
      </label>
    </div>
  );
}
Status.propTypes = {
  status: PropTypes.string.isRequired
};

export default Status;
