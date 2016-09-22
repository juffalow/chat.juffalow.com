//var Dispatcher = require('flux').Dispatcher;
import { Dispatcher } from 'flux';
import Constants from '../constants/Constants.js';

class AppDispatcher extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: 'BOARD_GAME',
            action: action
        });
    }
}

const appDispatcher = new AppDispatcher();

export default appDispatcher;
