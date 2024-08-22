import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import PreDisaster from './components/PreDisaster';
import DuringDisaster from './components/DuringDisaster';
import PostDisaster from './components/PostDisaster';
import ContactPage from './components/ContactPage';
import AffectedDistricts from './components/AffectedDistricts';
import VolunteerRegistrationForm from './components/VolunteerRegistrationForm';
import ClothesDonationForm from './components/ClothesDonationForm';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pre-disaster" element={<PreDisaster />} />
          <Route path="/during-disaster" element={<DuringDisaster />} />
          <Route path="/post-disaster" element={<PostDisaster />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/affected-districts" element={<AffectedDistricts />} />
          <Route path="/volunteer-signup" element={<VolunteerRegistrationForm />} />
          <Route path="/donate-clothes" element={<ClothesDonationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
