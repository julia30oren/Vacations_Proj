import React from "react";
import './App.css';
import { BrowserRouter, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import AppRoutes from './components/appRouter/AppRouters';

export default function () {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <AppRoutes />
                </Switch>
            </BrowserRouter>
        </div >
    )
}