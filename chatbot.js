var responses = {
  "Hi": "Hello",
  "How are you?": "Good",
  "How old are you?": "I dont know to be honest",
  "Where do you live?": "In your computer",
  "What is your name?": "I don't have one make use you imagination",
}

var fallbacks = ["ask another question", "what", "sure", "ok"];

function speak() {

  var userInput = $("#input").val();
  var response = responses[userInput];

if(response == undefined) {
  $('#chat-area').prepend(fallbacks[0] + "..." + "</br>");
}
else{
  $('#chat-area').prepend(response + "</br>");
}
  $('#chat-area').prepend(userInput + "</br>");
ugh
}
