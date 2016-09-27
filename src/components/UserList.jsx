import React from 'react';http://chat.juffalow.local/

/**
 * List of logged in users
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class UserList extends React.Component {
    static propTypes = {
        usernames: React.PropTypes.array,
    };

    constructor(props) {
        super(props);
    }

    render() {
        var usernames = this.props.usernames;
        return (
            <ul className="list-group">
                {usernames.map(function(text, index) {
                    return <li className="list-group-item" key={ index } >{text}</li>;
                })}
            </ul>
        );
    }
}

export default UserList;
