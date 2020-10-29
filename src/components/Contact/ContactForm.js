import React from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import Input from './Input';
import Status from './Status';

function ContactForm({
  details,
  status,
  sending,
  handleSubmit,
  handleChange
}) {
  return (
    <div className={css.contactForm}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={details.name}
          valid={details.nameValid}
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={details.email}
          valid={details.emailValid}
          onChange={handleChange}
        />
        <Input
          type="textarea"
          name="message"
          value={details.message}
          valid={details.messageValid}
          onChange={handleChange}
        />
        <Status status={status} />
        <div className={css.formElement}>
          <span className={css.labelText} />
          <input
            type="submit"
            id="submit"
            name="submit"
            disabled={sending}
            value={sending
              ? 'dispatching...'
              : `dispatch(${details.nameValid && details.emailValid && details.messageValid})`}
          />
        </div>
      </form>
      <footer>
        This site is protected by reCAPTCHA and the Google&nbsp;
        <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
        &nbsp;and&nbsp;
        <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a>
        &nbsp;apply.
      </footer>
    </div>
  );
}
ContactForm.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    nameValid: PropTypes.bool.isRequired,
    emailValid: PropTypes.bool.isRequired,
    messageValid: PropTypes.bool.isRequired,
  }).isRequired,
  status: PropTypes.string.isRequired,
  sending: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ContactForm;
