import React from "react";
import './Header.css'
import headerImage from '../assets/CrownLogoPlain.png';
import facebookIcon from '../assets/facebook-black.png';
import emailIcon from '../assets/email-black.png';
import igIcon from '../assets/ig-black.png';

const Header = () => {
    return (
        <header>
            <div className="content-wrapper">
                <div className="sub-heading-container">
                    <span className="sub-heading">GOOD DRINK. GOOD FOOD. GOOD PEOPLE.</span>
                </div>
                <img className="header-img" src={headerImage} />
                <div className="heading-buttons-container">
                    <div className="call-email-button-container">
                        <button className="class-button">CALL</button>
                        <button className="email-button">EMAIL</button>
                    </div>
                    <div className="social-button-container">
                        <img className="facebook-icon" src={facebookIcon} />
                        <img className="email-icon" src={emailIcon} />
                        <img className="ig-icon" src={igIcon} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;