import React from 'react';
import LoginActions from '../actions/LoginActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    login(event) {
        event.preventDefault();
        LoginActions.login(this.state.username);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="loginName">Username</label>
                            <input type="username" className="form-control" id="login-mail" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.login}>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
