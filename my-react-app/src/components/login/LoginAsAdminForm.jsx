import React from 'react';
import axios from 'axios';
import LogLinks from '../appRouter/LogLinks';

const loginAsAdminUrl = "http://localhost:5000/login/admin";

export default class LoginAsAdminForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        this.setState({ [target.name]: target.value });
    }

    handleRegister = async () => {
        const result = await axios.post(loginAsAdminUrl, this.state);
        const { message, user, token, cookie_token, redirect } = result.data;
        if (token && redirect) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            // save to cookies
            document.cookie = `cookie_token = ${cookie_token}`;
            alert(message);
        } else {
            alert(message);
        }
    }

    render() {
        return (
            <div className="App">

                <div className="loginForm">
                    <h1 className="ligin_name">Login As Admin</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Admin Name</label>
                            <input type="text" name="name" className="form-control" id="name" placeholder="Admin Name"
                                onChange={this.handleOnChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                                onChange={this.handleOnChange} />
                        </div>

                        <button type="button" className="btn btn-success btn-block loginBut"
                            onClick={this.handleRegister}>Submit</button>
                    </form>

                    <div className="NavBar logLink">
                        <LogLinks />
                    </div>
                </div>
            </div>
        );
    }
}

