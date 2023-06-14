import React from "react";
import './InfoBody.css';

import bbqPizza from '../assets/bbq-pizza.jpeg';
import coldBrew from '../assets/cold-brew.jpeg';

const InfoBody = () => {
    return (
        <div className="info-body-container">
            <div className="info-body">
                <div className="body-section">
                    <span className="section-heading">LOCATION</span>
                    <span className="section-info">215 S. Main St. #L</span>
                    <span className="section-info">Breckenridge, CO. 80424</span>
                </div>
                <div className="body-section">
                    <span className="section-heading">HOURS</span>
                    <span className="section-info">MON-SUN 8-6</span>
                </div>
                <div className="body-section">
                    <span className="section-heading">CONTACT</span>
                    <span className="section-info">970.453.6022</span>
                    <span className="section-info">sara@thecrownbreckenridge.com</span>
                </div>
            </div>
            <div className="info-image-container">
                <div className="info-image">
                    <img src={bbqPizza}/>
                    <span>BBQ flatbread to share… or not</span>
                </div>
                <div className="info-image">
                    <img src={coldBrew}/>
                    <span>Cold Brew made in house</span>
                </div>
            </div>
        </div>
    )
}

export default InfoBody;