import React from "react";
import airbnbLogo from '../assets/Vector.png';
export default function Navbar() {
    return (
        <nav className="nav">
            <img className = "nav--logo" src={airbnbLogo} alt="" />
        </nav>
    )
}