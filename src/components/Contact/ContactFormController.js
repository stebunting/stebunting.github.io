/* global grecaptcha */
import React, { useState } from 'react';
import validate from '../../helpers/functions/validate';
import ContactForm from './ContactForm';

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

  // Submit Form
  function handleSubmit(event) {
    event.preventDefault();
    if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
      const payload = {
        name: formDetails.name,
        email: formDetails.email,
        message: formDetails.message
      };

      grecaptcha.ready(() => {
        grecaptcha.execute(gRecaptchaToken, { action: 'send_message' })
          .then((token) => {
            payload.greptchaToken = token;

            fetch('https://rfxp-api.herokuapp.com/contact/', {
              method: 'POST',
              mode: 'cors',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
            }).then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.log(error));
          });
      });
    }
  }

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
    />
  );
}

export default ContactFormController;
