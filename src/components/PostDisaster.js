import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostDisaster() {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/volunteer-signup');
  };

  const handleDonateClick = () => {
    navigate('/donate');
  };

  const handleGetSupportClick = () => {
    navigate('/counselling-session'); // Navigating to the counseling session
  };

  const containerStyle = {
    animation: 'fadeIn 1s ease-in-out',
    transition: 'all 0.3s ease',
  };

  const cardStyle = {
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#6c757d',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    cursor: 'pointer',
  };

  const handleCardHover = (e, hover) => {
    if (hover) {
      e.currentTarget.style.transform = 'scale(1.05)';
      e.currentTarget.style.boxShadow = '0px 5px 15px rgba(0, 0, 0, 0.2)';
    } else {
      e.currentTarget.style.transform = 'scale(1)';
      e.currentTarget.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.1)';
    }
  };

  const handleButtonHover = (e, hover) => {
    if (hover) {
      e.currentTarget.style.backgroundColor = '#5a6268';
    } else {
      e.currentTarget.style.backgroundColor = '#6c757d';
    }
  };

  return (
    <div className="container" style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Post-Disaster Recovery Efforts</h2>
      <br />
      <div className="card-container">
        <div
          className="card"
          style={cardStyle}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3>Volunteer Recruitment</h3>
          <p>
            Join our efforts to rebuild and support those affected. Sign up to volunteer today and make a difference.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3>Fund Contribution</h3>
          <p>
            Your donations can help provide essential resources and support to those in need. Contribute to our relief fund.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={handleDonateClick}
          >
            Donate Now
          </button>
        </div>

        <div
          className="card"
          style={cardStyle}
          onMouseEnter={(e) => handleCardHover(e, true)}
          onMouseLeave={(e) => handleCardHover(e, false)}
        >
          <h3>Counseling Sessions</h3>
          <p>
            We offer free counseling sessions to help individuals and families cope with the trauma. Schedule a session with a professional.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={(e) => handleButtonHover(e, true)}
            onMouseLeave={(e) => handleButtonHover(e, false)}
            onClick={handleGetSupportClick} // Navigating to counseling session
          >
            Get Support
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDisaster;
