import React from 'react';
import axios from 'axios';
import { serverURL } from '../../config';

const chengePassUrl = `${serverURL}/login/password-chenge`;

export default class PasswordChange extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users_email: '',
            password: '',
            newpass: '',
            confPass: ''
        }
    }


    handleOnChange = (e) => {
        const { target } = e;
        if (target.value.length <= 0) {
            this.setState({ [target.name]: target.name });
        } else { this.setState({ [target.name]: target.value }); }
    }

    handleCheck = (e) => {
        const { target } = e;
        if (this.state.newpass !== target.value) {
            this.setState({ confPass: 'confPass' });
        }
        else { this.setState({ [target.name]: target.value }); }
    }

    handleChangePass = async () => {
        console.log(this.state);
        if (this.state.newpass === this.state.confPass) {
            // console.log("click", chengePassUrl, { users_email: this.state.users_email, password: this.state.password, newpass: this.state.newpass });
            const result = await axios.post(chengePassUrl, { users_email: this.state.users_email, password: this.state.password, newpass: this.state.newpass });
            const { message, redirect } = result.data;
            alert(message);
            if (redirect) {
                this.props.history.push('/login')
            }
        } else {
            alert('new passwords does not match');
        }
    }

    render() {
        return (
            <div className="component">
                <div className="forms_us">

                    <h1 className="form_tittle">Password Change :</h1>

                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="users_email" className="form-control" id="email" placeholder="Enter your email"
                                onChange={this.handleOnChange} />
                            {(this.state.users_email === 'users_email') ? <div className="not_filed"><p>You can't chenge password without Email!</p></div> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                                onChange={this.handleOnChange} />
                            {(this.state.password === 'password') ? <div className="not_filed"><p>You can't chenge password without Ald Password!</p></div> : null}
                        </div>

                        <div className="form-group">
                            <label htmlFor="newpass">New Password</label>
                            <input type="password" name="newpass" className="form-control" id="newpass" placeholder="New Password"
                                onChange={this.handleOnChange} />
                            {(this.state.newpass === 'newpass') ? <div className="not_filed"><p>No Password!</p></div> : null}

                        </div>

                        <div className="form-group">
                            <label htmlFor="confpass">New Password Confirmation</label>
                            <input type="password" name="confPass" className="form-control" id="confpass" placeholder="Password Confirmation"
                                onChange={this.handleCheck} />
                            {(this.state.confPass === 'confPass') ? <div className="not_filed"><p>New Password don't match!</p></div> : null}

                        </div>

                        <button type="button" className="btn btn-success btn-block loginBut"
                            onClick={this.handleChangePass}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

