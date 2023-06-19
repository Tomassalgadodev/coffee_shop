import React from "react";
import './Map.css';

import { GoogleMap, LoadScript } from "@react-google-maps/api";


const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
        >
            <GoogleMap zoom={10} center={{ lat: 44, lng: -44 }} mapContainerClassname="map-container"></GoogleMap>
        </LoadScript>
    )
}

export default Map;