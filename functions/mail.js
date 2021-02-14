const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

exports.handler = function handler(event, _context, callback) {
  if (event.httpMethod === 'POST' && typeof event.body === 'string') {
    const postBody = JSON.parse(event.body);
    const options = {
      from: process.env.ORDER_EMAIL,
      to: process.env.ORDER_DESTINATION,
      subject: `Uitschrijven - ${postBody.email}`,
      text: `${postBody.email} wil uitschrijven van de mailing-lijst.`,
    }

    transporter.sendMail(options, function (error, info) {
      if (error) {
        console.log('Email error: ', error)
        callback(null, { statusCode: 200 });
      } else {
        console.log('Email sent: ' + info.response)
        callback(null, { statusCode: 200 });
      }
    })
  }
}