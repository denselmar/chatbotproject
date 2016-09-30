var now = new Date(Date.now());

var responses = {
  "hi": "Hello",
  "how are you?": "Good",
  "how old are you?": "I dont know to be honest",
  "where do you live?": "In your computer",
  "what is your name?": "I don't have one make use you imagination",
  "what time is it?": now
}

var fallbacks = ["ask another question", "what", "sure", "ok"];

function speak() {

  var userInput = $("#input").val();
  userInput = userInput.toLowerCase();

  var response = responses[userInput];

if(response == undefined) {
  $('#chat-area').prepend(fallbacks[0] + "..." + "</br>");
}
else{
  $('#chat-area').prepend(response + "</br>");
}
  $('#chat-area').prepend(userInput + "</br>");
}

$(document).keyup(function(event) {
 if (event.keyCode == 13) {
   speak();
 }
});
