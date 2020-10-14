/* eslint-disable no-control-regex */
import React, { useState, useReducer } from 'react';
import { hot } from 'react-hot-loader';

import Typewriter from '../../helpers/Typewriter/Typewriter';
import './Contact.css';

function ContactForm() {
  // Valid/Invalid Colour Definitions
  const validColour = '#4f4';
  const invalidColour = '#f66';

  // Validity State
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);

  // Reducer function
  function reducer(state, action) {
    const { value, name: type } = action;
    switch (type) {
      case 'name': {
        const re = /[^a-zA-ZÀ-ƶ '-]/;
        setValidName(!re.test(value) && value.length > 0);
        return value;
      }

      case 'email': {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setValidEmail(re.test(value));
        return value;
      }

      case 'message': {
        setValidMessage(value.length > 0);
        return value;
      }

      default:
        return value;
    }
  }

  // Form Input State Declaration
  const [name, setName] = useReducer(reducer, '');
  const [email, setEmail] = useReducer(reducer, '');
  const [message, setMessage] = useReducer(reducer, '');

  // Submit Form
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
            onChange={(event) => setName(event.target)}
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
            onChange={(event) => setEmail(event.target)}
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
            onChange={(event) => setMessage(event.target)}
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
