import React from "react";
import logo from '../images/globe.svg'
import '../css/Navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <div id="logo">
                <img className="logoimg" src={logo} alt="" />
                <span className="logotitle">my travel journal.</span>
            </div>
        </div>
    );
}