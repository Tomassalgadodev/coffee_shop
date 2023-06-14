import React from "react";
import './NavBar.css';

import downArrow from '../assets/down-arrow.png';

const NavBar = () => {
    return (
        <div className="nav-bar-wrapper">
            <div className="nav-bar">
                <button className="nav-bar-button">ABOUT US</button>
                <button className="nav-bar-button">GENERAL FAQ</button>
                <button className="nav-bar-button">GIFT CARD</button>
                <button className="nav-bar-button">ONLINE MENU</button>
            </div>
            <img src={downArrow} className="down-arrow"/>
            <span className="nav-bar-tagline">CELEBRATE- IT'S PATIO SEASON!</span>
        </div>
    )
}

export default NavBar;