import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import Client from '../utils/client.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const MessageComposerActions = {
    /**
     *
     * @param string text
     */
    sendMessage: function(text) {
        console.log("MessageComposerActions.createMessage(" + text + ")");
        AppDispatcher.handleAction({
            actionType: Constants.MESSAGE_NEW,
            text: text
        });
        Client.sendMessage(text);
    }
};

export default MessageComposerActions;
