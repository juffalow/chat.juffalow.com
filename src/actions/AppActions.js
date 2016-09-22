import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const AppActions = {
    /**
     *
     * @param string text
     */
    newMessage: function(text) {
        console.log("AppActions.newMessage(" + text + ")");
        AppDispatcher.handleAction({
            actionType: Constants.MESSAGE_RECEIVED,
            text: text,
        });
    }
};

export default AppActions;
