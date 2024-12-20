import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '../images/logo.jpg';

function Navbar() {
  const navigate = useNavigate();

  const handlePostDisasterClick = (e) => {
    e.preventDefault();
    navigate('/post-disaster');
  };

  const handleEducationClick = (e) => {
    e.preventDefault();
    navigate('/education');
  };

  return (
    <div className="navbar-container">
      <div className="top-bar bg-success text-white">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="social-links">
            <button onClick={() => window.location.href = "https://www.facebook.com"} className="btn btn-link text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button onClick={() => window.location.href = "https://www.twitter.com"} className="btn btn-link text-white mx-2">
              <i className="fab fa-twitter"></i>
            </button>
            <button onClick={() => navigate('/admin-login')} className="btn btn-link text-white mx-2">
              <i className="fas fa-user"></i>
            </button>
          </div>
          <div className="contact-info d-flex align-items-center">
            <a href="mailto:naveenkpm033@gmail.com" className="text-white mx-2">Webmail</a>
            <span className="text-white mx-2">|</span>
            <span className="text-white mx-2">+91 9043800820</span>
            <a href="mailto:info@ndma.gov.pk" className="text-white mx-2">nationaldisastermanagement.org@gmail.com</a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Crisis Compass Logo" style={{ width: '50px', height: '50px' }} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pre-disaster">Weather</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/affected-districts">Affected Districts</Link>
              </li>

              <li className="nav-item dropdown"
                onMouseEnter={(e) => {
                  const dropdown = e.currentTarget.querySelector('.dropdown-menu');
                  dropdown.style.display = 'block';
                }}
                onMouseLeave={(e) => {
                  const dropdown = e.currentTarget.querySelector('.dropdown-menu');
                  dropdown.style.display = 'none';
                }}>
                <Link
                  className="nav-link"
                  to="/during-disaster"
                  id="donateDropdown"
                  role="button"
                  aria-expanded="false"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/during-disaster');
                  }}
                >
                  Donate
                </Link>
                <ul className="dropdown-menu" aria-labelledby="donateDropdown" style={{ display: 'none' }}>
                  <li><Link className="dropdown-item" to="/donate-food">Donate Food</Link></li>
                  <li><Link className="dropdown-item" to="/donate-clothes">Donate Clothes</Link></li>
                  <li><Link className="dropdown-item" to="/donate-essential-items">Donate Essential Items</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={handlePostDisasterClick}>
                  Post-Disaster
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/your-needs">Your Needs</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={handleEducationClick}>
                  Disaster Awareness
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/logo">Our Collaborators</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
