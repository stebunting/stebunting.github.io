/* eslint-disable no-control-regex */
import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import './Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function validate(type, value) {
    switch (type) {
      case 'name': {
        const re = /[^a-zA-ZÀ-ƶ '-]/;
        const valid = !re.test(value);
        setName(value);
        break;
      }

      case 'email': {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const valid = re.test(value);
        setEmail(value);
        break;
      }

      case 'message': {
        const valid = value.length > 0;
        setMessage(value);
        break;
      }

      default:
        break;
    }
  }

  return (
    <form>
      <div className="formElement">
        <label htmlFor="name">
          <span className="labelText">
            {'const name ='.padStart(16, '\u00a0')}
            &nbsp;
          </span>
          <input
            onChange={(event) => validate('name', event.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="undefined"
            value={name}
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
            onChange={(event) => validate('email', event.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="undefined"
            value={email}
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
            onChange={(event) => validate('message', event.target.value)}
            id="message"
            name="message"
            placeholder="undefined"
            value={message}
          />
        </label>
      </div>
      <div className="formElement">
        {''.padStart(16, '\u00a0')}
        &nbsp;
        <input type="submit" id="submit" name="submit" value="dispatch()" />
      </div>
    </form>
  );
}

function Contact() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        &nbsp;Contact
      </h2>
      <ContactForm />
    </div>
  );
}

export default hot(module)(Contact);
