import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <div className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar bg-success text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="social-links">
            <button onClick={() => window.location.href = "https://www.facebook.com"} className="btn btn-link text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button onClick={() => window.location.href = "https://www.twitter.com"} className="btn btn-link text-white mx-2">
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={() => window.location.href = "https://www.youtube.com"} className="btn btn-link text-white mx-2">
              <i className="fab fa-youtube"></i>
            </button>
            
          </div>
          <div className="contact-info d-flex align-items-center">
            <a href="mailto:webmail@example.com" className="text-white mx-2">Webmail</a>
            <span className="text-white mx-2">|</span>
            <span className="text-white mx-2">051-111-157-157</span>
            <a href="mailto:info@ndma.gov.pk" className="text-white mx-2">info@ndma.gov.pk</a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">NDMA</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pre-disaster">Pre-Disaster</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/during-disaster">Donate</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/post-disaster">Post-Disaster</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/affected-districts">Affected Districts</Link>
              </li>
              {/* ... other nav items ... */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
