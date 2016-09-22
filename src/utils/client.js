import AppActions from '../actions/AppActions.js';

var w;

const client = {
    run: function(host) {
        w = new Ws("ws://95.85.41.108:8080/my_endpoint");

        w.OnConnect(function () {
    		console.log("Connected!");
    	});

        w.OnDisconnect(function () {

    	});

    	w.On("chat", function (message) {
            console.log("Received : " + message);
    		AppActions.newMessage(message);
    	});

    	w.On("login", function (message) {

    	});
    },

    sendMessage: function(message) {
        console.log("Sending : " + message);
        w.Emit("chat", message);
    },

    login: function(username) {
        w.Emit("login", username);
    }
};

export default client;
