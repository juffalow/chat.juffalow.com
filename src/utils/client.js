import AppActions from '../actions/AppActions.js';

var w;

const client = {
    run: function(host) {
        w = new Ws(host);

        w.OnConnect(function () {
    		console.log("Connected!");
    	});

        w.OnDisconnect(function () {

    	});
        
        /*
         * When new messages is received
         */
    	w.On("chat", function (message) {
            console.log("Client.chat(" + message + ")");
            var m = JSON.parse(message);
    		AppActions.newMessage(m.time, m.username, m.text);
    	});

    	w.On("login", function (message) {

    	});

        /*
         * When new user connects the chat
         */
        w.On("user:connect", function(username) {
            console.log("Client.userConnect(" + username + ")");
            AppActions.userConnected(username);
        });

        /*
         * When some user leaves the chat
         */
        w.On("user:disconnect", function(username) {
            console.log("Client.userDisconnect(" + username + ")");
            AppActions.userDisconnected(username);
        });

        /*
         * When user logs in
         */
        w.On("init", function(message) {
            console.log("client.init(" + message + ")");
            var initialInformations = JSON.parse(message.toString());
            AppActions.userList(initialInformations.usernames);
            AppActions.messageList(initialInformations.messages);
        });
    },
    /**
     *
     * @param string message
     */
    sendMessage: function(message) {
        console.log("Sending : " + message);
        w.Emit("chat", message);
    },

    /**
     *
     * @param string username
     */
    login: function(username) {
        w.Emit("login", username);
    }
};

export default client;
