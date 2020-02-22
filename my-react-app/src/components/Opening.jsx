import React, { useEffect } from 'react';
import { Redirect } from "react-router";
import { serverURL } from '../config';
import axios from 'axios';


const getUrl = `${serverURL}`;

export default function (props) {
    const user = localStorage.getItem("user");

    useEffect(() => {
        async function getDB() {
            const DB_check = await axios.get(getUrl);
        }
        getDB();
        if (!user) {
            alert(' Verification failed. Please, log in! ');
        }
    }, [])

    return (
        <div className="component">
            {(!user) ? <Redirect to="/login" /> : <Redirect to="/home" />}
        </div>
    )
}