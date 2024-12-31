import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DonorDashboard = () => {
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate();

  const getDonorLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => reject('Error fetching location: ' + error.message)
        );
      } else {
        reject('Geolocation is not supported by this browser');
      }
    });
  };

  const handlePhysicalHelp = async (needyLocation) => {
    try {
      const donorLocation = await getDonorLocation();
      navigate('/map', {
        state: { donorLocation, needyLocation },
      });
    } catch (error) {
      alert('Could not fetch your location: ' + error);
    }
  };

  const handlePaymentHelp = () => {
    window.location.href = 'https://example-payment-gateway.com';
  };

  useEffect(() => {
    // For now, you can use a dummy request list
    setRequests([
      {
        name: 'John Doe',
        resource: 'Food',
        location: { lat: 12.9716, lng: 77.5946 }, // Dummy location for needy
        contact: '1234567890',
      },
      {
        name: 'Jane Smith',
        resource: 'Clothes',
        location: { lat: 13.0827, lng: 80.2707 }, // Dummy location for needy
        contact: '9876543210',
      },
    ]);
  }, []);

  return (
    <div>
      <h1>Donor Dashboard</h1>
      {requests.map((req, index) => (
        <div key={index}>
          <p>{req.name} needs {req.resource}</p>
          <button onClick={() => handlePhysicalHelp(req.location)}>Help Physically</button>
          <button onClick={handlePaymentHelp}>Help via Payment</button>
        </div>
      ))}
    </div>
  );
};

export default DonorDashboard;
