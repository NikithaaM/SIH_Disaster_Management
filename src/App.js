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
import PaymentPage from './components/PaymentPage';
import LogoDescription from './components/LogoDescription';
import FullDescription from './components/FullDescription';
import Goonj from './components/Goonj';
import PaymentGateway from './components/PaymentGateway';
import Admin from './components/Admin';
import MunicipalityRequest from './components/MunicipalityRequest';
import MessageSystem from './components/MessageSystem'; // Import Message System component
import YourNeeds from './components/YourNeeds'; 
import CounsellingSession from './components/CounsellingSession';
import CounselorPage from './logins/CounselorPage';
import MunicipalityPage from './logins/MunicipalityPage';
import CounselorDashboard from './logins/CounselorDashboard';
import ViewPeopleNeeds from './logins/ViewPeopleNeeds'; // Import new components
import UpdateDonations from './logins/UpdateDonations'; // Import new components
import ManageDonations from './components/ManageDonations'; // Import the new component
import UpdateInventory from './components/UpdateInventory';
import ManageInventory from './components/ManageInventory';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Education from './components/Education'; 

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
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/logo" element={<LogoDescription />} />
          <Route path="/full-description" element={<FullDescription />}/>
          <Route path="/goonj-description" element={<Goonj />}/>
          <Route path="/payment-gateway" element={<PaymentGateway />}/>
          <Route path="/admin" element={<Admin />} />
          <Route path="/your-needs" element={<YourNeeds />} />
          <Route path="/counselling-session" element={<CounsellingSession />} /> 
          <Route path="/counselor" element={<CounselorPage />} />
          <Route path="/municipality" element={<MunicipalityPage />} />
          <Route path="/counselor-dashboard" element={<CounselorDashboard />} />
          <Route path="/manage-donations" element={<ManageDonations />} /> {/* New route for Manage Donations */}
          <Route path="/view-needs" element={<ViewPeopleNeeds />} /> {/* Add route for View People's Needs */}
          <Route path="/update-donations" element={<UpdateDonations />} /> {/* Add route for Update Donations */}
          <Route path="/message-system" element={<MessageSystem />} /> {/* Message System Page */}
          <Route path="/municipality-request" element={<MunicipalityRequest />} />
          <Route path="/update-inventory" element={<UpdateInventory />} />
          <Route path="/manage-inventory" element={<ManageInventory />} />
          <Route path="/education" element={<Education />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
