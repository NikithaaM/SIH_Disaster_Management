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
import DonateFood from './components/DonateFood';
import DonateEssentialItems from './components/DonateEssentialItems';
import Login from './components/Login';
import DonatePage from './components/DonatePage';
import PaymentPage from './components/PaymentPage';  // Import PaymentPage component
import LogoDescription from './components/LogoDescription';
import FullDescription from './components/FullDescription';
import Goonj from './components/Goonj';
import PaymentGateway from './components/PaymentGateway';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JS, including Popper.js
import Admin from './components/Admin';



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
          <Route path="/donate-food" element={<DonateFood />} />
          <Route path="/donate-essential-items" element={<DonateEssentialItems />} />
          <Route path="/donate" element={<DonatePage />} /> 
          <Route path="/admin-login" element={<Login />} />
          <Route path="/payment" element={<PaymentPage />} /> {/* Add the route for PaymentPage */}
          <Route path="/logo" element={<LogoDescription />} /> {/* Correct the syntax here */}
          <Route path="/full-description" element={<FullDescription />}/>
          <Route path="/goonj-description" element={<Goonj />}/>
          <Route path="/payment-gateway" element={<PaymentGateway />}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
