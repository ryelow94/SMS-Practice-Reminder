const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function initialSms(userNumber) {
  client.messages
    .create({
      body: 'Anyway, Ill be outside at midnight on your porch. let me know if theres anyone willing to face me',
      from: "+12817646556",
      to: userNumber, //phone
    })
    .then((response) => console.log(response))
    .catch(console.error);
}

module.exports = initialSms;
