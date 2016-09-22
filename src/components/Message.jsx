import React from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Message extends React.Component {
    static propTypes = {
        text: React.PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="message">
                {this.props.text}
            </li>
        );
    }
}

export default Message;
