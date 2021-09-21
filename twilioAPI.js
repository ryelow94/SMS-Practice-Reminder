const accountSid = "ACab6a552249b9c8594b505f3724e7a1c6";
const authToken = "f76e3b7e72598b86f83263e8f4301922";
const client = require("twilio")(accountSid, authToken);
const userNumber = '+19167151005'

exports.twilioAPI = {
  postMessage: (message, number) =>
    client.messages
      .create({
        body: message,
        from: "+12817646556",
        to: number, //phone
      })
      .then(console.log),
};
