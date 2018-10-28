var field = document.getElementById("field");
var chat = document.getElementById("chat");
var ws = new WebSocket("ws:localhost:591/");
ws.ommesage = function(message){
  chat.vallue = massage.data+"\n"+chat.value;
};
ws.onopen = function() {
  field.addEventListener("keydown",function(event) {
    if(event.which == 13) {
      ws.send(field.value);
      field.value = "";
    }
  });
};
