import React, { useEffect } from 'react';
import { Redirect } from "react-router";


export default function (props) {
    const user = localStorage.getItem("user");

    return (
        <div className="component">
            {(!user) ? <Redirect to="/login" /> : <Redirect to="/home" />}
        </div>
    )
}