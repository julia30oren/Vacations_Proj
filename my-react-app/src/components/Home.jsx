import React from 'react';
import Vacations from './client/Vacations';
import AdminPage from './admins/AdminPage';

export default function Home(props) {

    return (
        <div className="App">
            <div className="user_welcome">
                {(!localStorage.getItem('user')) ? null : <h1>{localStorage.getItem('user')} Welcome</h1>}
            </div>
            {(localStorage.getItem('user') === 'Admin') ? <div><h1> Admins page </h1><AdminPage /></div> :
                <div><h1> Users Page </h1> <Vacations /></div>}
        </div>
    )
}