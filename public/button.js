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
  var explainH1 = document.getElementById("info");
  explainH1.classList = "show has-text-primary is-size-6 has-text-centered"

}
