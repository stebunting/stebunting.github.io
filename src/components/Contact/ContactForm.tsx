// Requirements
import React, { ChangeEvent, FormEvent, ReactElement } from 'react';

// Components
import Input from './Input';
import Status from './Status';

// Style
import css from './Contact.module.less';

interface Props {
  details: {
    name: string,
    email: string,
    message: string,
    nameValid: boolean,
    emailValid: boolean,
    messageValid: boolean
  },
  status: string,
  sending: boolean,
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void,
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

function ContactForm(props: Props): ReactElement {
  const {
    details,
    status,
    sending,
    handleSubmit,
    handleChange
  } = props;

  return (
    <div className={css.contactForm}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          value={details.name}
          valid={details.nameValid}
          handleChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={details.email}
          valid={details.emailValid}
          handleChange={handleChange}
        />
        <Input
          type="textarea"
          name="message"
          value={details.message}
          valid={details.messageValid}
          handleChange={handleChange}
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

export default ContactForm;
