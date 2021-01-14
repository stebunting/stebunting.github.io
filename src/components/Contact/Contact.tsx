// Requirements
import React, { ReactElement } from 'react';

// Components
import Typewriter from '../../helpers/Typewriter/Typewriter';
import ContactFormController from './ContactFormController';

function Contact(): ReactElement {
  return (
    <div className="main">
      <Typewriter text="Contact" />
      <ContactFormController />
    </div>
  );
}

export default Contact;
