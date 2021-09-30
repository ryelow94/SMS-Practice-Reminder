const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

function initialSms(userNumber) {
  client.messages
    .create({
      body: 'Do you remember when ryan fell off his bike at greenstone? I do, he"ll wish that was the worst thing to happen to him',
      from: "+12817646556",
      to: userNumber, //phone
    })
    .then((response) => console.log(response))
    .catch(console.error);
}

module.exports = initialSms;
