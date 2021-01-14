// Requirements
import React, {
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
  FormEvent
} from 'react';

// Functions
import statusMessages from './statusMessages';
import sendEmail from './sendMail';
import validate from '../../helpers/functions/validate';

// Components
import ContactForm from './ContactForm';

function ContactFormController(): ReactElement {
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
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
      setSending(true);
      setStatus(statusMessages.SENDING);
      sendEmail(formDetails)
        .then((data) => {
          setSending(false);
          setStatus(data.status === 'OK' ? statusMessages.EMAIL_SENT : statusMessages.ERROR);
        }).catch(() => {
          setSending(false);
          setStatus(statusMessages.ERROR);
        });
    } else {
      setStatus(statusMessages.INVALID_INPUT);
    }
  }

  useEffect(() => {
    function getStatus() {
      if (formDetails.nameValid && formDetails.emailValid && formDetails.messageValid) {
        return statusMessages.VALID_INPUT;
      }
      if (status === statusMessages.INVALID_INPUT) {
        return statusMessages.INVALID_INPUT;
      }
      return statusMessages.UNDEFINED;
    }

    setStatus(getStatus());
  }, [status, formDetails]);

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
