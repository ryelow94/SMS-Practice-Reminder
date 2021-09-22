const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.twilioAPI  = {
  postMessage: (message, number) =>
    client.messages
      .create({
        body: message,
        from: "+12817646556",
        to: number //phone
      })
      .then(console.log),
};
