import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const Url = "http://localhost:5000/verification";

export const withAuth = (WrappedComponent) => {
    return function (props) {
        const [status, setStatus] = useState('checking');
        const token = localStorage.token;
        const user = localStorage.user;

        useEffect(() => {
            if (!token) {
                return setStatus('varFail');
            } else {
                async function c() {
                    try {
                        const result = await axios.post(Url, { token: token, users_email: user });
                        if (result.data.message === 'invalid token') return setStatus('varFail');
                        else if (result.data.message === 'ok') return setStatus('tokenValid');
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