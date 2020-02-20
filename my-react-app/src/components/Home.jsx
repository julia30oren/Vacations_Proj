import React from 'react';
import Vacations from './client/Vacations';
import AdminPage from './admins/AdminPage';

export default function Home(props) {

    return (
        <div>
            <div className="user_welcome">
                {(!localStorage.getItem('user')) ? null : <h1>Welcome {localStorage.getItem('user')} </h1>}
            </div>
            {(localStorage.getItem('user') === 'admin') ? <AdminPage /> : <Vacations />}
        </div>
    )
}