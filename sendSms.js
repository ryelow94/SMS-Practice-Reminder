const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function initialSms(userNumber) {
  client.messages
    .create({
      body: 'Have you completed your practice goals for the day? If yes, respond with "yes". Otherwise, respond with "no" and we will remind you later!',
      from: "+12817646556",
      to: userNumber, //phone
    })
    .then((response) => console.log(response))
    .catch(console.error);
}

module.exports = initialSms;
