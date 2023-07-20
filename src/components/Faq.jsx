// components/Faq.jsx

import React from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 34.009351, // approximate latitude of Santa Monica Pier
  lng: -118.497468 // approximate longitude of Santa Monica Pier
};

const radius = 10 * 1609.34; // 10 miles in meters

function Faq() {
  return (
    <div>
      <h1>FAQ</h1>
      <p>Q: What is the delivery zone?</p>
      <p>A: We deliver within a 10 mile radius of the Santa Monica Pier. See the map below for our delivery area:</p>
      <LoadScript googleMapsApiKey="YOUR_API_KEY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Circle
            center={center}
            radius={radius}
            options={{
              fillColor: 'lightblue',
              strokeColor: 'blue',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillOpacity: 0.35,
            }}
          />
        </GoogleMap>
      </LoadScript>
      {/* Add more FAQs as needed */}
    </div>
  );
}

export default Faq;
