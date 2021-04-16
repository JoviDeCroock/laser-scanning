const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.handler = function handler(event, _context, callback) {
  if (event.httpMethod === 'POST' && typeof event.body === 'string') {
    const postBody = JSON.parse(event.body);

    const msg = {
      to: process.env.EMAIL_DESTINATION, // Change to your recipient
      from: process.env.EMAIL_DESTINATION, // Change to your verified sender
      subject: `Uitschrijven - ${postBody.email}`,
      text: `${postBody.email} wil uitschrijven van de mailing-lijst.`,
    };

    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        callback(null, { statusCode: 200 });
      })
      .catch((error) => {
        console.log('Email error: ', error)
        callback(null, { statusCode: 500 });
      })
  }
}
