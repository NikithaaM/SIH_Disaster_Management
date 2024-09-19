import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function CounselorPage() {
  const [isRegister, setIsRegister] = useState(false); // Toggle between Login and Register forms
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status
  const [message, setMessage] = useState(''); // Success message
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Handle login submission
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
    // Add login logic here (e.g., API call)
    
    // Simulate successful login and navigate
    setMessage('Login successful!');
    setIsSubmitted(true);
    navigate('/counselor-dashboard'); // Navigate to Counselor Dashboard page
  };

  // Handle register submission
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log("Register form submitted");
    // Add register logic here (e.g., API call)
    
    // Simulate successful registration and navigate
    setMessage('Registration successful!');
    setIsSubmitted(true);
    navigate('/counselor-dashboard'); // Navigate to Counselor Dashboard page
  };

  return (
    <div className="container mt-5">
      <h1>Counselor Dashboard</h1>
      <p>Welcome to the Counselor Dashboard. Here you can manage cases, interact with clients, and provide guidance.</p>

      <div className="form-container mt-4">
        {/* Display success message if form was submitted successfully */}
        {isSubmitted && (
          <div className="alert alert-success">
            {message}
          </div>
        )}

        {isRegister ? (
          // Register Form
          <div className="card p-4">
            <h3 className="card-title mb-4">Counselor Registration</h3>
            <form onSubmit={handleRegisterSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Register
              </button>
            </form>
            <p className="mt-3">
              Already have an account?{' '}
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsRegister(false);
                  setIsSubmitted(false); // Reset submission state when toggling forms
                  setMessage(''); // Clear the message when switching forms
                }}
              >
                Login here
              </button>
            </p>
          </div>
        ) : (
          // Login Form
          <div className="card p-4">
            <h3 className="card-title mb-4">Counselor Login</h3>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
              >
                Login
              </button>
            </form>
            <p className="mt-3">
              Don't have an account?{' '}
              <button
                className="btn btn-link"
                onClick={() => {
                  setIsRegister(true);
                  setIsSubmitted(false); // Reset submission state when toggling forms
                  setMessage(''); // Clear the message when switching forms
                }}
              >
                Register here
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CounselorPage;
