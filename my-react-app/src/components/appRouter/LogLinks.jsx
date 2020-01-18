import React from 'react';
import { Link } from "react-router-dom";
import { routes } from './routers.config'

export default function LogLinks() {
    return routes.filter(route => route.isVisible === 'Chenge&RegLinks').map(route =>
        <Link strict="true" to={route.path} key={route.key}> {route.title} </Link>
    )
}