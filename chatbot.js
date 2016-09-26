var responses = {
  "Hi": "Hello",
  "How are you": "Good",
}

function speak() {

  var userInput = $("#input").val();
  var response = responses[userInput];

  $('#chat-area').prepend(response + "</br>");
  $('#chat-area').prepend(userInput + "</br>");
}




i hate life
