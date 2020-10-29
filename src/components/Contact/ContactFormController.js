import React, { useState, useEffect } from 'react';
import validate from '../../helpers/functions/validate';
import ContactForm from './ContactForm';
import sendEmail from './sendMail';
import statusMessages from './statusMessages';

function ContactFormController() {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    message: '',
    nameValid: false,
    emailValid: false,
    messageValid: false
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(statusMessages.UNDEFINED);

  // Submit Form
  function handleSubmit(event) {
    event.preventDefault();
    if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
      setSending(true);
      setStatus(statusMessages.SENDING);
      sendEmail(formDetails)
        .then((data) => {
          setSending(false);
          setStatus(data.status === 'OK' ? statusMessages.EMAIL_SENT : statusMessages.ERROR);
        }).catch(() => {
          setSending(false);
          setStatus(statusMessages.ERROR);
        });
    } else {
      setStatus(statusMessages.INVALID_INPUT);
    }
  }

  function getStatus() {
    if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
      return statusMessages.VALID_INPUT;
    }
    if (status === statusMessages.INVALID_INPUT) {
      return statusMessages.INVALID_INPUT;
    }
    return statusMessages.UNDEFINED;
  }

  useEffect(() => {
    setStatus(getStatus());
  }, [formDetails]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
      [`${name}Valid`]: validate(name, value)
    });
  }

  return (
    <ContactForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      details={formDetails}
      status={status}
      sending={sending}
    />
  );
}

export default ContactFormController;
