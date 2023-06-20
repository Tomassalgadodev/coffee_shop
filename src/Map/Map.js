import React from "react";
import './Map.css';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapPosition = { 
    lat: 39.480101, 
    lng: -106.046269 
}


const Map = () => {
    return (
        <LoadScript
            googleMapsApiKey={process.env.REACT_APP_API_KEY}
        >
            <GoogleMap zoom={18} center={mapPosition} mapContainerStyle={{ maxWidth: '1200px', height: '700px', margin: '0 auto 0 auto', marginTop: '70px' }}>
                <Marker position={mapPosition} />
            </GoogleMap>
        </LoadScript>
    )
}

export default Map;