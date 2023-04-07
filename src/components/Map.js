// components/Map.js
import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const Map = ({ capital }) => {
  if (!capital) {
    return null;
  }

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={capital} zoom={10}>
      <Marker position={capital} />
    </GoogleMap>
  );
};

export default Map;
