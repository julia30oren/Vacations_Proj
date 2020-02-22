import React from 'react';
import axios from 'axios';
import LogLinks from '../appRouter/LogLinks';
import { Redirect } from "react-router";
import { serverURL } from '../../config';

const loginUrl = `${serverURL}/login`;

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users_email: '',
            password: '',
            redirect: false
        }
    }
    handleOnChange = (e) => {
        const { target } = e;
        if (target.value.length <= 0) {
            this.setState({ [target.name]: target.name });
        } else { this.setState({ [target.name]: target.value }); }
    }

    handleRegister = async (props) => {
        const result = await axios.post(loginUrl, this.state);
        const { message, user, token, likes, redirect, email } = result.data;
        // console.log(this.state)
        if (likes === null) {
            const emptyArray = '[]';
            localStorage.setItem("I_Like", emptyArray);
        } else {
            localStorage.setItem("I_Like", `[${likes}]`);
        }
        if (token && redirect) {
            localStorage.setItem("token", token);
            localStorage.setItem("user", user);
            localStorage.setItem("email", email);

            this.setState({ redirect: true })
            alert(message);
        } else {
            alert(message);
        }
    }

    render() {
        return (
            <div className="component">
                {(this.state.redirect) ? <Redirect to="/home" /> : null}
                <div className="forms_us">
                    <h1 className="form_tittle">Login :</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="users_email">Email address</label>
                            <input type="email" name="users_email" className="form-control" id="users_email" placeholder="Enter your email"
                                onChange={this.handleOnChange} />
                            {(this.state.users_email === 'users_email') ? <div className="not_filed"><p>You can't login without Email!</p></div> : null}

                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" className="form-control" id="password" placeholder="Password"
                                onChange={this.handleOnChange} />
                            {(this.state.password === 'password') ? <div className="not_filed"><p>You can't login without Password!</p></div> : null}
                        </div>

                        <button type="button" className="btn btn-success btn-block loginBut"
                            onClick={this.handleRegister}>Submit</button>
                    </form>
                    <LogLinks />

                </div>
            </div>
        );
    }
}

