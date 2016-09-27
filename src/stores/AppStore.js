import EventEmitter from 'events';
import Constants from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

var APP_CHANGE_EVENT = "change";

/**
 *
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class AppStore extends EventEmitter {
    constructor() {
        super();
        this.messages = [];
        this.page = "login";
        this.usernames = [];
    }

    emitChange() {
        this.emit(APP_CHANGE_EVENT);
    }

    /**
     *
     * @param function callback
     */
    addChangeListener(callback) {
        this.on(APP_CHANGE_EVENT, callback);
    }

    /**
     *
     * @param function callback
     */
    removeChangeListener(callback) {
        this.removeListener(APP_CHANGE_EVENT, callback);
    }

    getState() {
        return {
            messages: this.messages,
            page: this.page,
            usernames: this.usernames
        }
    }

    /**
     *
     * @param string text
     */
    addMessage(time, username, text) {
        this.messages.push({time: time, username: username, text: text});
    }

    setMessages(messages) {
        messages = messages || [];
        this.messages = messages;
    }

    /**
     *
     * @param string page
     */
    setPage(page) {
        this.page = page;
    }

    /**
     *
     * @param array usernames
     */
    setUsernames(usernames) {
        this.usernames = usernames;
    }

    /**
     *
     * @param string username
     */
    addUsername(username) {
        this.usernames.push(username);
    }

    /**
     *
     * @param username
     */
    removeUsername(username) {
        var index = this.usernames.indexOf(username);
        this.usernames.splice(index, 1);
    }
}

const appStore = new AppStore();

appStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.MESSAGE_RECEIVED:
            appStore.addMessage(action.time, action.username, action.text);
            appStore.emitChange();
            break;
        case Constants.MESSAGE_LIST:
            appStore.setMessages(action.messages);
            appStore.emitChange();
            break;
        case Constants.USER_LOGIN:
            appStore.setPage("chat");
            appStore.emitChange();
            break;
        case Constants.USER_CONNECTED:
            appStore.addUsername(action.username);
            appStore.emitChange();
            break;
        case Constants.USER_DISCONNECTED:
            appStore.removeUsername(action.username);
            appStore.emitChange();
            break;
        case Constants.USER_LIST:
            appStore.setUsernames(action.usernames);
            appStore.emitChange();
            break;
    }
});

export default appStore;
