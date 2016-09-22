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
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleChange(event) {
         this.setState({text: event.target.value});
    }

    handleKeyUp(event) {
        if( event.key === 'Enter' ) {
            MessageComposerActions.sendMessage(this.state.text);
            this.setState({text: ""});
        }
    }

    sendMessage(event) {
        event.preventDefault();
        console.log("MessageComposer.sendMessage [" + this.state.text + "]");
        MessageComposerActions.sendMessage(this.state.text);
        this.setState({text: ""});
    }

    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <textarea className="form-control" name="text" value={this.state.text} onChange={this.handleChange} onKeyUp={this.handleKeyUp} />
                    </div>
                    <button className="btn btn-default pull-right" onClick={this.sendMessage}>Send</button>
                </form>
            </div>
        );
    }
}

export default MessageComposer;
