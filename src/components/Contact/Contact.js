/* eslint-disable no-control-regex */
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import Typewriter from '../../helpers/Typewriter/Typewriter';
import './Contact.css';

function ContactForm() {
  const validColour = '#4f4';
  const invalidColour = '#f66';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  function validate(event) {
    const { value, name: type } = event.target;
    switch (type) {
      case 'name': {
        const re = /[^a-zA-ZÀ-ƶ '-]/;
        setValidName(!re.test(value) && value.length > 0);
        setName(value);
        break;
      }

      case 'email': {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValidEmail(re.test(value));
        setEmail(value);
        break;
      }

      case 'message': {
        setValidMessage(value.length > 0);
        setMessage(value);
        break;
      }

      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validName && validEmail && validMessage) {
      // SEND EMAIL
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="formElement">
        <label htmlFor="name">
          <span className="labelText">
            {'const name ='.padStart(16, '\u00a0')}
            &nbsp;
          </span>
          <input
            onChange={validate}
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
            onChange={validate}
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
            onChange={validate}
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

export default hot(module)(Contact);
