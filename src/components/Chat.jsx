import React from 'react';
import Message from './Message.jsx';

/**
 * List of messages in chat
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Chat extends React.Component {
    static propTypes = {
        messages: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var messages = this.props.messages;
        return (
            <ul className="chat">
                {messages.map(function(message, index) {
                    return <Message key={ index } time={message.time} username={message.username} text={message.text} />;
                })}
            </ul>
        );
    }
}

export default Chat;
