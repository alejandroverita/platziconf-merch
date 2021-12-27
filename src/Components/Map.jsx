import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({data}) => {

    const mapStyles ={
        height: '50vh',
        width: '100%',
    }

    const defaultCenter = {
        lat: data.lat, lng: data.lng
    }

    const googleMap = process.env.API_KEY
    
    return (
        <LoadScript googleMapsApiKey = {googleMap} >
            <GoogleMap
                mapContainerStyle= {mapStyles}
                zoom={17}
                center = {defaultCenter}
            >
                <Marker position= {defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
}

export default Map;