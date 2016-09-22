import React from 'react';
import Message from './Message.jsx';

/**
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
            <ul>
                {messages.map(function(text, index) {
                    return <Message key={ index } text={text} />;
                })}
            </ul>
        );
    }
}

export default Chat;
