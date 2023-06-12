import React from "react";
import './Header.css'
import headerImage from '../assets/CrownLogoPlain.png';
import facebookIcon from '../assets/facebook-black.png';
import emailIcon from '../assets/email-black.png';
import igIcon from '../assets/ig-black.png';

const Header = () => {
    return (
        <div>
            <div className="sub-heading-container">
                <span>GOOD DRINK. GOOD FOOD. GOOD PEOPLE.</span>
            </div>
            <img className="header-img" src={headerImage} />
            <div className="heading-buttons-container">
                <div className="call-email-button-container">
                    <button>CALL</button>
                    <button>EMAIL</button>
                </div>
                <div className="social-button-container">
                    <img src={facebookIcon} />
                    <img src={emailIcon} />
                    <img src={igIcon} />
                </div>
            </div>
        </div>
    )
}

export default Header;