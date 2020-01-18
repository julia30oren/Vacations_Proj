import React from 'react';
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import AppRoutes from './components/appRouter/AppRouters';
import atantion_icon from './icons/attention-sign-png--2400.png'

export default function () {

    return (
        <div className="App">

            <BrowserRouter>
                <NavBar />
                {/* <div className="description">
                    <img className="atantion_icon" src={atantion_icon} />
                    <p>This site was created by Julia Orendovsky as a presentation project.</p>
                    <p>In the project I used Java Script, React,  Bootstrap, Node.js,  mySql.</p>
                    <div><p>To login as administrator you will need:</p>
                        <p>Admin Name: “admin”</p>
                        <p>Password: “123456789”</p></div>
                    <p>Full code can be found on <a>Git Hub</a></p>
                </div> */}
                <Switch>
                    <AppRoutes />
                </Switch>
            </BrowserRouter>
        </div >
    )
}