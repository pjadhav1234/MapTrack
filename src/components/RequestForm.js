import React, { useState } from 'react';

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    resource: '',
    contact: '',
    location: { lat: null, lng: null },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      formData.location = { lat: latitude, lng: longitude };

      try {
        // Example: Replace this with your backend API
        alert('Request submitted successfully!');
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>REQUEST FORM</h1>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Resource Needed"
        onChange={(e) => setFormData({ ...formData, resource: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Contact Number"
        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestForm;
