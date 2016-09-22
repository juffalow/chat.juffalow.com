import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import Client from '../utils/client.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const AppActions = {
    /**
     *
     * @param string text
     */
    login: function(username) {
        console.log("LoginActions.login(" + username + ")");
        AppDispatcher.handleAction({
            actionType: Constants.USER_LOGIN,
            username: username,
        });
        Client.login(username);
    }
};

export default AppActions;
