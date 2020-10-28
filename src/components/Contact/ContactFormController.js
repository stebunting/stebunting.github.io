/* global grecaptcha */
import React, { useState, useEffect } from 'react';
import validate from '../../helpers/functions/validate';
import ContactForm from './ContactForm';
import statusMessages from './statusMessages';

function ContactFormController() {
  const gRecaptchaToken = process.env.RECAPTCHA_API_KEY;

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
      const payload = {
        name: formDetails.name,
        email: formDetails.email,
        message: formDetails.message
      };

      grecaptcha.ready(() => {
        grecaptcha.execute(gRecaptchaToken, { action: 'send_message' })
          .then((token) => {
            payload.greptchaToken = token;

            fetch('htps://rfxp-api.herokuapp.com/contact/', {
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            }).then((response) => response.json())
              .then((data) => {
                setSending(false);
                if (data.status === 'OK') {
                  setStatus(statusMessages.EMAIL_SENT);
                } else {
                  setStatus(statusMessages.ERROR);
                }
              })
              .catch(() => {
                setSending(false);
                setStatus(statusMessages.ERROR);
              });
          });
      });
    } else {
      setStatus(setStatus.INVALID_INPUT);
    }
  }

  function getStatus() {
    // if (formDetails.name === '' && formDetails.email === '' && formDetails.message === '') {
    //   return '';
    // }
    if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
      return statusMessages.VALID_INPUT;
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
