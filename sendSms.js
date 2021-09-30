const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function initialSms(userNumber) {
  client.messages
    .create({
      body: 'You only thing i"m eating for dinner is your mom',
      from: "+12817646556",
      to: userNumber, //phone
    })
    .then((response) => console.log(response))
    .catch(console.error);
}

module.exports = initialSms;
