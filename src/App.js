import React from 'react';
import DonationPage from './pages/DonationPage'
import './App.css';
import Mobilemode from './pages/MobileVersion';

function App() {
  return (
    <div>
      <DonationPage />
      <Mobilemode />
    </div>
  );
}

export default App;
