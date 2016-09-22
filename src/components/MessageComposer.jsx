import React from 'react';
import MessageComposerActions from '../actions/MessageComposerActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class MessageComposer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange(event) {
         this.setState({text: event.target.value});
    }

    sendMessage(event) {
        event.preventDefault();
        console.log("MessageComposer.sendMessage [" + this.state.text + "]");
        MessageComposerActions.sendMessage(this.state.text);
    }

    render() {
        return (
            <div>
                <form>
                    <textarea name="text" value={this.state.text} onChange={this.handleChange} />
                    <button onClick={this.sendMessage}>Send</button>
                </form>
            </div>
        );
    }
}

export default MessageComposer;
