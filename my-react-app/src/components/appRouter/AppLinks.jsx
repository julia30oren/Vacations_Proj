import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config'

export default function AppLinks() {
    return routes.filter(route => route.isVisible === 'navBar').map(route =>
        <Link strict="true" to={route.path} key={route.key} className='sidebar'><img src={route.icon} className="nav_icons" alt="..." /> {route.title}</Link>
    )
}