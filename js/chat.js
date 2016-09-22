var messageTxt;
var messages;

$(function () {

	messageTxt = $("#messageTxt");
	username = $("#username");
	messages = $("#messages");


	w = new Ws("ws://95.85.41.108:8080/my_endpoint");
	w.OnConnect(function () {
		console.log("Websocket connection established");
	});

	w.OnDisconnect(function () {
		appendMessage($("<div><center><h3>Disconnected</h3></center></div>"));
	});

	w.On("chat", function (message) {
		appendMessage($("<div>" + message + "</div>"));
	});

	w.On("login", function (message) {

	});

	$("#sendBtn").click(function () {
		w.Emit("chat", messageTxt.val().toString());
		messageTxt.val("");
	});


	$("#btn-login").click(function () {
		w.Emit("login", username.val().toString());
	});

})


function appendMessage(messageDiv) {
    var theDiv = messages[0];
    var doScroll = theDiv.scrollTop == theDiv.scrollHeight - theDiv.clientHeight;
    messageDiv.appendTo(messages);
    if (doScroll) {
        theDiv.scrollTop = theDiv.scrollHeight - theDiv.clientHeight;
    }
}
