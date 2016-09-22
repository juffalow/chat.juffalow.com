import React from 'react';
import Login from './Login.jsx';
import Chat from './Chat.jsx';
import MessageComposer from './MessageComposer.jsx';
import AppStore from '../stores/AppStore.js';
import Client from '../utils/client.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = AppStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        AppStore.addChangeListener(this.onChange);
        Client.run("");
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(AppStore.getState());
    }

    render() {
        var content = (<Login />);
        
        if( this.state.page === "chat" ) {
            content = (
                <div className="row">
                    <div className="col-md-12">
                        <Chat messages={this.state.messages} />
                    </div>
                    <div className="col-md-12">
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
