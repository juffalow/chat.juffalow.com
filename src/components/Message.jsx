import React from 'react';

/**
 * Single message in the list
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Message extends React.Component {
    static propTypes = {
        time : React.PropTypes.string,
        username: React.PropTypes.string,
        text: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,document.body.scrollHeight);
    }

    render() {
        var time = new Date(this.props.time);
        var displayTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        return (
            <li className="message">
                <span className="message-time">[ {displayTime} ]</span> {this.props.username}: {this.props.text}
            </li>
        );
    }
}

export default Message;
