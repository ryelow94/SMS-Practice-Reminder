const accountSid = "ACab6a552249b9c8594b505f3724e7a1c6";
const authToken = "f76e3b7e72598b86f83263e8f4301922";
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
