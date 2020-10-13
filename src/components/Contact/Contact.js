import React, { useState } from 'react';
import { hot } from 'react-hot-loader';

import './Contact.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
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
