const fetchSmsBtn = document.getElementById("fetch-send-sms-btn");

fetchSmsBtn.addEventListener("click", async () => {
  const userNumber = document.getElementById("number").value;
  console.log(userNumber);
  if (userNumber.length < 11) {
    alert(
      "Please enter a valid 10 digit phone number including the country code"
    );
  } else {
    const response = await fetch("smsStart/" + userNumber, {
      method: "POST",
    }).then((response) => response.json());
    console.log(response);
  }
});
var infoBtn = document.getElementById("info-btn");
infoBtn.addEventListener("click", handleClick);

function handleClick() {
  var textDiv = document.getElementById("text-container");
  var explainH1 = document.createElement("h1");

  explainH1.classList = "is-size-3 has-text-dark";
  textDiv.classList = "has-background-primary";

  explainH1.textcontent =
    "By entering your phone number, you will receive a text message asking if you have completed your practice goals for the day";

  textDiv.appendChild(explainH1);
}
