import React from 'react';
import LoginAsUserForm from './LoginAsUserForm';
import LoginAsAdminForm from './LoginAsAdminForm';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loginAsAdmin: ' Push To Login As User '
        }
    }

    loginAs = (e) => {
        if (this.state.loginAsAdmin === ' Push To Login As User ') {
            this.setState({ loginAsAdmin: ' Push To Login As Admin ' });
        } else {
            this.setState({ loginAsAdmin: ' Push To Login As User ' });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="login_init col-sm-10 col-md-8 col-lg-6">
                        <h2>How do you want to login?</h2>
                        <button type="button" className="btn btn-success loginBut" onClick={this.loginAs}> {this.state.loginAsAdmin} </button>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
                {(this.state.loginAsAdmin === ' Push To Login As User ') ? <LoginAsAdminForm /> : <LoginAsUserForm />}
            </div>
        );
    }
}

