/* global grecaptcha */
function sendEmail(details) {
  const gRecaptchaToken = process.env.RECAPTCHA_API_KEY;
  const payload = {
    name: details.name,
    email: details.email,
    message: details.message
  };

  return new Promise((resolve, reject) => {
    grecaptcha.ready(() => {
      grecaptcha.execute(gRecaptchaToken, { action: 'send_message' })
        .then((token) => {
          payload.greptchaToken = token;

          fetch(`${process.env.API_BASE_URL}${process.env.API_MAILER_ENDPOINT}`, {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
          }).then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    });
  });
}

export default sendEmail;
