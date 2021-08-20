import React from "react";
import { Link } from "react-router-dom"
import { Style } from "./navigation.module.scss";
import Logo from "../../assets/hotel-overlook-logo.png"
export function Navigation() {

    
    return(
        <>
        <nav>
            <img src={Logo} alt="" />
            <ul>
                <li>
                    <Link to="/FrontPage">Forside</Link>
                </li>
                <li>
                    <Link to="/HotelsandDesPage">Hoteller og Destinationer</Link>
                </li>
                <li>
                    <Link to="/RoomPage">Værelser</Link>
                </li>
                <li>
                    <Link to="/ResevationsPage">Reservation</Link>
                </li>
                <li>
                    <Link to="/loginpage">Login</Link>
                </li>
            </ul>
        </nav>
        </>
   );
}