import React from 'react';
import { Route } from "react-router-dom";
import { routes } from './routers.config'


export default function AppRoutes() {
    return routes.map(route =>
        <Route path={route.path} component={route.component} key={route.key} />
    )
}

