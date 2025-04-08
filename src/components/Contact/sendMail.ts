interface MessageDetails {
  name: string;
  email: string;
  message: string;
  grecaptchaToken?: string;
}

function sendEmail(details: MessageDetails): Promise<{ status: string }> {
  const gRecaptchaToken = process.env.RECAPTCHA_API_KEY || "";
  const payload: MessageDetails = {
    name: details.name,
    email: details.email,
    message: details.message,
  };

  return new Promise((resolve, reject) => {
    grecaptcha.enterprise.ready(() => {
      grecaptcha.enterprise
        .execute(gRecaptchaToken, { action: "send_message" })
        .then((token) => {
          payload.grecaptchaToken = token;

          fetch(
            `${process.env.API_BASE_URL}${process.env.API_MAILER_ENDPOINT}`,
            {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                service: process.env.MAILER_SERVICE,
                ...payload,
              }),
            },
          )
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    });
  });
}

export default sendEmail;
