import React from "react";
import './Location.css';

const Location = () => {
    return (
        <div className="location-container">
            <div className="location-details">
                <div className="body-section location-section">
                    <span className="section-heading">LOCATION</span>
                    <span className="section-info">215 S. Main St. #L</span>
                    <span className="section-info">Breckenridge, CO. 80424</span>
                </div>
                <div className="location-description">
                    <p>Located on beautiful Main St. Breckenridge. Paid parking available on Main Street and in the Tiger Dredge lot. Two doors North of Starbucks. Support Local!</p>
                    <a>Get Directions</a>
                </div>
            </div>
        </div>
    )
}

export default Location;