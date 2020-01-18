import React from 'react';
import atantion_icon from '../icons/attention-sign-png--2400.png'

export default function () {

    return (
        <div className="description">
            <img className="atantion_icon" src={atantion_icon} />
            <p>This site was created by Julia Orendovsky as a presentation project.</p>
            <p>In the project I used Java Script, React,  Bootstrap, Node.js,  MySql.</p>
            <p>To login as administrator you will need:</p>

            <p>Admin Name: “ <b> admin </b> ”</p>
            <p>Password: “ <b> 123456789 </b> ”</p>

            <p>Full code can be found on <a href="https://github.com/julia30oren">Git Hub</a></p>
        </div >
    )
}