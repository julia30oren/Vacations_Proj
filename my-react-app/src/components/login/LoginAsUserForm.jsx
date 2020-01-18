import React from 'react';
import axios from 'axios';
import LogLinks from '../appRouter/LogLinks';

const loginUrl = "http://localhost:5000/login";

export default class LoginAsUserForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnChange = (e) => {
        const { target } = e;
        this.setState({ [target.name]: target.value });
    }

    handleRegister = async (props) => {
        const result = await axios.post(loginUrl, this.state);
        const { message, user, token, cookie_token, likes, redirect, email } = result.data;
        if (token && redirect) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            localStorage.setItem("email", email);
            localStorage.setItem("I_Like", likes);
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
                    <h1 className="ligin_name">Login As User</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email"
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