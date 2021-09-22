const http = require("http");
const dotenv = require("dotenv").config()
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const bodyParser = require("body-parser");
const { twilioAPI } = require("./twilioAPI.js");
const initialSms = require("./sendSms.js");
const PORT = process.env.PORT || 1338

console.log("twilio API is: ", twilioAPI);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html');
});


app.post("/smsStart/:userNumber", async (req, res) => {
  initialSms(req.params.userNumber)
})

app.post("/sms", async (req, res) => {
  console.log(req.body);
  const twiml = new MessagingResponse();
  if (req.body.Body == "Yes" || req.body.Body == "yes") {
    twiml.message("Good Job Keep it Up!");
  } else if (req.body.Body == "No" || req.body.Body == "no") {
    await twiml.message("We Will Remind You In 30 seconds");
    setTimeout(() => {
      console.log("we are sending a follow up");
      twilioAPI
        .postMessage("Hello, here is another reminder to practice!", req.body.From)
        .catch(console.error)
        .then(console.log);
    }, 30000);
  } else {
    twiml.message("Please respond with a vaild message");
  }

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(PORT, () => {
  console.log("Express server listening on port 1338");
});
