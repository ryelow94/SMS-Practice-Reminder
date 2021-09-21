const fetchSmsBtn = document.getElementById("fetch-send-sms-btn")

fetchSmsBtn.addEventListener('click', async () => {
  const userNumber = document.getElementById('number').value
  console.log(userNumber)
   const response = await fetch('smsStart/' + userNumber, { method: 'POST' })
   .then(response => response.json())
   console.log(response);
})