# SMS-Practice-Reminder

## Description
This app is designed to send and recieve SMS messages from the user upon entering their phone number into the web page. The original intention of the webpage was to remind the user to complete practice goals for learning an instrument, but it can really be used as a reminder for anything that needs to be completed in a day. Furthermore, the webpage can be used to automatically remind other people that the user enters in the the input field because any phone number can be submitted. This provides an easy way to automate the process of completing and reminding others of goals or responsiblities they may have. Once the user enters their phone number, they will receive a text message asking if they have completed their practice goals for the day. If yes, the app will not remind the user again until they reenter their phone number into the web page. If no, the app will send a reminder message in 2 minutes after the user responds. The app will continue to send reminders so long as the user responds with "no".

## Technologies 
* Express Server 
* JavaScript 
* Twilio (Sms service)
* HTML 
* Bulma (CSS framework)
* Dotenv 
* Heroku

## Future Development 
In it's current state, the app has all of the functionality required to send simple messages and simple reminders; however, I plan to add more customizable funtionality. For example, I would like the user to be able to specify what exactly they would like to be reminded to do as well as when they would like to be reminded. As it stands, the app will remind the user in 2 minutes after receieving a no response, and while this demonstrates the potential functionality of the app, it is not a realistic utility quite yet. I would like to find a way to allow the user to be reminded hours, if not days after responding to the app. I would also like to set up a way to store reminders in a database so the user can come back to previous reminder settings. 

## Challenges 
Learning how to use twilio is intuitive, but it was new territory for me at the time and required a lot of documentation reading to be able to run it affectively. Next, at first I tried to use a serverless function to send and recieve the text messages, but I soon found out that the functions do not stay live long enough to be effective for this sort of app without spending a lot of money on the backend. I then decided using a more traditional express server approach in conjunction with Heroku was the best way to build this app. 

## Contributors 
Ryan Logan 
[Github](https://github.com/ryelow94)

## Link to Deployment 
https://sms-practice-reminder.herokuapp.com/
