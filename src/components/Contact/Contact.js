/* global grecaptcha */
import React, { useState, useReducer } from 'react';

import Typewriter from '../../helpers/Typewriter/Typewriter';
import validate from '../../helpers/functions/validate';
import './Contact.css';

const axios = require('axios');

function ContactForm() {
  const gRecaptchaToken = '6LfbV9cZAAAAAHiRUS6XMNMiIoWsXTTL9gzfPzxP';

  // Valid/Invalid Colour Definitions
  const validColour = '#4f4';
  const invalidColour = '#f66';

  // Validity State
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  // Form Input State Declaration
  const [name, setName] = useReducer((_, action) => {
    setValidName(validate('name', action));
    return action;
  }, '');

  const [email, setEmail] = useReducer((_, action) => {
    setValidEmail(validate('email', action));
    return action;
  }, '');

  const [message, setMessage] = useReducer((_, action) => {
    setValidMessage(validate('message', action));
    return action;
  }, '');

  // Submit Form
  function handleSubmit(event) {
    event.preventDefault();
    if (validName && validEmail && validMessage) {
      const payload = { name, email, message };

      grecaptcha.ready(() => {
        grecaptcha.execute(gRecaptchaToken, { action: 'send_message' })
          .then((token) => {
            payload.greptchaToken = token;
            axios({
              url: 'https://rfxp-api.herokuapp.com/contact/',
              method: 'post',
              headers: {
                'Content-Type': 'application/json'
              },
              data: payload
            }).then((response) => {
              console.log(response.data);
            }).catch((error) => {
              console.log(error);
            });
          });
      });
    }
  }

  return (
    <div className="contactForm">
      <form onSubmit={handleSubmit}>
        <div className="formElement">
          <label htmlFor="name">
            <span className="labelText">
              {'const name ='.padStart(16, '\u00a0')}
              &nbsp;
            </span>
            <input
              onChange={(event) => setName(event.target.value)}
              type="text"
              id="name"
              name="name"
              placeholder="undefined"
              value={name}
              style={{ color: validName ? validColour : invalidColour }}
            />
          </label>
        </div>
        <div className="formElement">
          <label htmlFor="email">
            <span className="labelText">
              {'const email ='.padStart(16, '\u00a0')}
              &nbsp;
            </span>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="undefined"
              value={email}
              style={{ color: validEmail ? validColour : invalidColour }}
            />
          </label>
        </div>
        <div className="formElement">
          <label htmlFor="message">
            <span className="labelText">
              {'const message ='.padStart(16, '\u00a0')}
              &nbsp;
            </span>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              id="message"
              name="message"
              placeholder="undefined"
              value={message}
              style={{ color: validMessage ? validColour : invalidColour }}
            />
          </label>
        </div>
        <div className="formElement">
          {''.padStart(16, '\u00a0')}
          &nbsp;
          <input type="submit" id="submit" name="submit" value={`dispatch(${validName && validEmail && validMessage})`} />
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

function Contact() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Contact" />
      </h2>
      <ContactForm />
    </div>
  );
}

export default Contact;
