import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';


export const withAuth = (WrappedComponent) => {
    return function (props) {
        const [status, setStatus] = useState('checking');

        useEffect(() => {
            const token = localStorage.token;
            const key = document.cookie.split('=');

            jwt.verify(token, key[1], (err, decoded) => {
                if (err) {
                    localStorage.clear();
                    return setStatus('varFail');
                }
                else return setStatus('result');
            })
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