import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = (e) => {
    e.preventDefault();

    // Add your login logic here, e.g., authentication
    if (email === 'admin@gmail.com' && password === 'password123') {
      // Example condition for successful login
      console.log('Login successful!');
      navigate('/admin'); // Navigate to the Admin page
    } else {
      console.log('Login failed!');
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="card p-4">
        <h3 className="card-title mb-4">Admin Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
