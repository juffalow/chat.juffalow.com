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
            messages: this.messages
        }
    }

    /**
     *
     * @param string text
     */
    addMessage(text) {
        this.messages.push(text);
    }
}

const appStore = new AppStore();

appStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.MESSAGE_RECEIVED:
            appStore.addMessage(action.text);
            appStore.emitChange();
            break;
    }
});

export default appStore;
