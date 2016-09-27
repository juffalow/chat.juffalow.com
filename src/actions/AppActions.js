import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import Client from '../utils/client.js';
import Notification from '../utils/notification.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const AppActions = {
    /**
     *
     * @param string datetime
     * @param string username
     * @param string text
     */
    newMessage: function(datetime, username, text) {
        console.log("AppActions.newMessage(" + datetime + ", " + username + ", " + text + ")");
        AppDispatcher.handleAction({
            actionType: Constants.MESSAGE_RECEIVED,
            time: datetime,
            username: username,
            text: text
        });
        Notification.newMessage();
    },

    /**
     *
     * @param array messages
     */
    messageList: function(messages) {
        console.log("AppActions.userList(" + messages + ")");
        AppDispatcher.handleAction({
            actionType: Constants.MESSAGE_LIST,
            messages: messages
        });
    },

    /**
     *
     * @param array usernames
     */
    userList: function(usernames) {
        console.log("AppActions.userList(" + usernames + ")");
        AppDispatcher.handleAction({
            actionType: Constants.USER_LIST,
            usernames: usernames
        });
    },

    /**
     *
     * @param string username
     */
    userConnected: function(username) {
        console.log("AppActions.userConnected(" + username + ")");
        AppDispatcher.handleAction({
            actionType: Constants.USER_CONNECTED,
            username: username
        });
    },

    /**
     *
     * @param string username
     */
    userDisconnected: function(username) {
        console.log("AppActions.userDisconnected(" + username + ")");
        AppDispatcher.handleAction({
            actionType: Constants.USER_DISCONNECTED,
            username: username
        });
    },

};

export default AppActions;
