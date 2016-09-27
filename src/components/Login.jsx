import React from 'react';
import LoginActions from '../actions/LoginActions.js';

/**
 * Login page ( initial page )
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            error: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    login(event) {
        event.preventDefault();
        if( this.state.username.length === 0 ) {
            this.setState({error: "Username cannot be empty!"});
            return;
        }

        if( this.state.username.length > 16 ) {
            this.setState({error: "Username is too long!"});
            return;
        }

        LoginActions.login(this.state.username);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <form>
                        <div className={"form-group" + (this.state.error != "" ? " has-error" : "")}>
                            <label className="control-label" htmlFor="loginName">Username</label>
                            <input type="text" className="form-control" id="login-mail" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                            {this.state.error != "" ? (<span className="help-block">{this.state.error}</span>) : ""}
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.login}>Log In</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
