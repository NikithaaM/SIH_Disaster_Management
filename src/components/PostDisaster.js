import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostDisaster() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/volunteer-signup');
  };

  const handleDonateClick = () => {
    navigate('/donate'); // Ensure this matches the path in App.js
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>Post-Disaster Recovery Efforts</h2>
      <br />
      <div className="card-container">
        <div className="card">
          <h3>Volunteer Recruitment</h3>
          <p>Join our efforts to rebuild and support those affected. Sign up to volunteer today and make a difference.</p>
          <button onClick={handleSignUpClick}>Sign Up</button>
        </div>
        <br />
        <div className="card">
          <h3>Fund Contribution</h3>
          <p>Your donations can help provide essential resources and support to those in need. Contribute to our relief fund.</p>
          <button onClick={handleDonateClick}>Donate Now</button>
        </div>
        <br />
        <div className="card">
          <h3>Counseling Sessions</h3>
          <p>We offer free counseling sessions to help individuals and families cope with the trauma. Schedule a session with a professional.</p>
          <button>Get Support</button>
        </div>
      </div>
    </div>
  );
}

export default PostDisaster;
