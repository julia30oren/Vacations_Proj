import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { serverURL } from '../../config';

const Url = `${serverURL}/verification`;

export const withAuth = (WrappedComponent) => {
    return function (props) {
        const [status, setStatus] = useState('checking');
        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');

        useEffect(() => {
            if (!token) {
                return setStatus('varFail');
            } else {
                // console.log(token, user)
                async function c() {
                    try {
                        const result = await axios.post(Url, { token: token, users_email: user });
                        // console.log(result)
                        if (result.data.message === 'invalid token' || result.data.message === 'jwt expired') {
                            localStorage.removeItem("I_Like");
                            localStorage.removeItem("InfoResult");
                            localStorage.removeItem("token");
                            localStorage.removeItem("user");
                            localStorage.removeItem("email");
                            return setStatus('varFail');
                        }
                        if (result.data.message === 'ok') return setStatus('tokenValid');
                    } catch (err) {
                        console.log(err)
                    }
                }
                c();
            }
        }, [])

        if (status === 'varFail') {
            localStorage.removeItem("token");
            alert(' Verification failed. Please, log in! ');
            return <Redirect to="/login" />
        }
        if (status === 'checking') return <div className="loader"></div>;
        return <WrappedComponent {...props} />
    }
}