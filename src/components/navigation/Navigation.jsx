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
                    <Link to="/frontpage">Forside</Link>
                </li>
                <li>
                    <Link to="/hotelsandDes">Hoteller og Destinationer</Link>
                </li>
                <li>
                    <Link to="/roompage">Værelser</Link>
                </li>
                <li>
                    <Link to="/resevationpage">Reservation</Link>
                </li>
                <li>
                    <Link to="/loginpage">Login</Link>
                </li>
            </ul>
        </nav>
        </>
   );
}