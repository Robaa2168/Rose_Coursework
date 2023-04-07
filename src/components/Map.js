// components/Map.js
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ capital }) => {
  if (!capital) {
    return null;
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyDOzxbdHOwd3q8Rl4YCB1XDSEshDwcnOxE">
      <GoogleMap mapContainerStyle={containerStyle} center={capital} zoom={10}>
        <Marker position={capital} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
