import React from 'react';
import Login from '../login/Login';
import Home from '../Home';
import Opening from '../Opening';
import Exit from '../Exit';
import Chart from '../admins/Chart';
import passwordChenge from '../login/PasswordChenge';
import Register from '../login/Registration';
import { withAuth } from '../hoc/auth';
import log_icon from '../../icons/user.png';
import home_icon from '../../icons/home.png';
import chart_icon from '../../icons/bar-chart.png';
import exit_icon from '../../icons/320139.png'

export const routes = [
    { key: 0, path: "/", component: Opening },
    { key: 1, isVisible: 'navBar ', for: 'user', icon: log_icon, title: ' Login ', path: "/login", component: Login },
    { key: 2, isVisible: 'Chenge&RegLinks', title: ' Chenge Password ', path: "/passwordChenge", component: passwordChenge },
    { key: 3, isVisible: 'navBar', for: 'user', icon: home_icon, title: ' Home ', path: "/home", component: (props) => { const HomeWithAuth = withAuth(Home); return <HomeWithAuth {...props} /> } },
    { key: 4, isVisible: 'Chenge&RegLinks', title: ' Registration ', path: "/registration", component: Register },
    { key: 5, isVisible: 'navBar', for: 'adminOnly', icon: chart_icon, title: ' Chart ', path: "/chart", component: (props) => { const ChartWithAuth = withAuth(Chart); return <ChartWithAuth {...props} /> } },
    { key: 6, isVisible: 'navBar', for: 'user', icon: exit_icon, title: ' Exit ', path: "/signout", component: Exit },
]