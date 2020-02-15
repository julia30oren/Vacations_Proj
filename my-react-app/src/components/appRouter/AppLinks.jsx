import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config'

export default function AppLinks() {
    return routes.filter(route => route.for === 'user').map(route =>
        <Link to={route.path} key={route.key}><img src={route.icon} className="nav_icons" alt="..." /> {route.title}</Link>
    )
}