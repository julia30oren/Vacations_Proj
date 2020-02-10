import React, { useState } from "react";
import AppLinks from './appRouter/AppLinks';


export default function NavBar(props) {
    const [openNav, setOpenNav] = useState(null);
    // console.log(openNav)

    return (
        <nav>
            <i className="fas fa-bars fa-3x" onClick={() => { if (openNav === null) { setOpenNav(true) } else { setOpenNav(!openNav) } }}></i>
            {(openNav === null || openNav === false) ? null :
                <ul><li className="nav_links"><AppLinks /></li></ul>}



            <ul className="big_nav">
                <li className="nav_links"><AppLinks /></li>
            </ul>
        </nav>
    );
}