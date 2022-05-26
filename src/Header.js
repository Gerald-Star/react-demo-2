

import React from "react";
import './Header.css';


export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./image/logo.jpg" alt="" width="60px" className="logo"/>

                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <br/> <br/> 
            </nav>
        </header>
        
    )
}

