import React from 'react';
import Login from './Login.jsx';
import Chat from './Chat.jsx';
import UserList from './UserList.jsx';
import MessageComposer from './MessageComposer.jsx';
import AppStore from '../stores/AppStore.js';
import Client from '../utils/client.js';
import Notification from '../utils/notification.js';

/**
 * Main component
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = AppStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    /**
     * When the app is rendered it connects to the server and listen
     *
     */
    componentWillMount() {
        AppStore.addChangeListener(this.onChange);
        Client.run(this.props.host);
        Notification.init();
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(AppStore.getState());
    }

    /**
     * When the user come on page, he should see login page and after
     * login, chat page is shown.
     */
    render() {
        var content = (<Login />);

        if( this.state.page === "chat" ) {
            content = (
                <div className="row">
                    <div className="col-md-4 col-sm-12">
                        <UserList usernames={this.state.usernames} />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <Chat messages={this.state.messages} />
                        <MessageComposer />
                    </div>
                </div>
            );
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default App;
