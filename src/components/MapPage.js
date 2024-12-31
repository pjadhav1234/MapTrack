import React from 'react';
import { useLocation } from 'react-router-dom';

const MapPage = () => {
  const { state } = useLocation();
  const { donorLocation, needyLocation } = state;

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${donorLocation.lat},${donorLocation.lng}&destination=${needyLocation.lat},${needyLocation.lng}&travelmode=driving`;

  return (
    <div>
      <h2>Map Directions</h2>
      <p>Donor's Location: {donorLocation.lat}, {donorLocation.lng}</p>
      <p>Needy's Location: {needyLocation.lat}, {needyLocation.lng}</p>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
        View Directions on Google Maps
      </a>
    </div>
  );
};

export default MapPage;
