import React from 'react';
import Typewriter from '../../helpers/Typewriter/Typewriter';
import ContactFormController from './ContactFormController';

function Contact() {
  return (
    <div className="main">
      <Typewriter text="Contact" />
      <ContactFormController />
    </div>
  );
}

export default Contact;
