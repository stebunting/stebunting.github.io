import React from 'react';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import ContactFormController from './ContactFormController';

function Contact() {
  return (
    <div className="main">
      <h2>
        <span className="prompt">$</span>
        <Typewriter text="Contact" />
      </h2>
      <ContactFormController />
    </div>
  );
}

export default Contact;
