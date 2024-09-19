import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // New state for user role
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example login logic with roles
    if (email === 'admin@gmail.com' && password === 'password123' && role === 'admin') {
      console.log('Admin login successful!');
      navigate('/admin'); // Navigate to the Admin page
    } else if (email === 'counselor@gmail.com' && password === 'counselor123' && role === 'counselor') {
      console.log('Counselor login successful!');
      navigate('/counselor'); // Navigate to Counselor page
    } else if (email === 'municipality@gmail.com' && password === 'municipality123' && role === 'municipality') {
      console.log('Municipality Officer login successful!');
      navigate('/municipality'); // Navigate to Municipality page
    } else if (email === 'panchayat@gmail.com' && password === 'panchayat123' && role === 'panchayat') {
      console.log('Panchayat Officer login successful!');
      navigate('/panchayat'); // Navigate to Panchayat page
    } else if (email === 'local@gmail.com' && password === 'local123' && role === 'local') {
      console.log('Local Officer login successful!');
      navigate('/local'); // Navigate to Local Officer page
    } else {
      console.log('Login failed!');
      alert('Invalid credentials or role. Please try again.');
    }
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="card p-4">
        <h3 className="card-title mb-4">Login</h3>
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
          <div className="form-group">
            <label>Select Role</label>
            <select
              className="form-control"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">-- Select Role --</option>
              <option value="admin">Admin</option>
              <option value="counselor">Counselor</option>
              <option value="municipality">Municipality Officer</option>
              <option value="panchayat">Panchayat Officer</option>
              <option value="local">Local Officer</option>
            </select>
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
