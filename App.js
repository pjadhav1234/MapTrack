import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequestForm from './components/RequestForm';
import DonorDashboard from './components/DonorDashboard';
import MapPage from './components/MapPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<RequestForm />} />
      <Route path="/dashboard" element={<DonorDashboard />} />
      <Route path="/map" element={<MapPage />} />
    </Routes>
  </Router>
);

export default App;
