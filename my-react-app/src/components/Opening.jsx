import React, { useEffect } from 'react';
import atantion_icon from '../icons/attention-sign-png--2400.png'

export default function (props) {

    useEffect(() => {
        localStorage.removeItem("I_Like");
        localStorage.removeItem("InfoResult");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("email");
    }, [])

    return (
        <div className="component">
            <div className="atantion">
                <img className="atantion_icon" src={atantion_icon} />
                <p>This site was created by Julia Orendovsky as a presentation project.</p>
                <p>In the project I used Java Script, React,  Bootstrap, Node.js,  MySql.</p>
                <p>To login as administrator you will need:</p>

                <p>Admin Name: “ <b> admin </b> ”</p>
                <p>Password: “ <b> 123456789 </b> ”</p>

                <p>Full code can be found on </p><a className="git_link" href="https://github.com/julia30oren/Vacations_Proj">Git Hub</a>
            </div>
        </div>
    )
}