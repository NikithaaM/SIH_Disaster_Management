import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './DonatePage.css';

function DonatePage() {
  const navigate = useNavigate();  // Initialize navigate function

  const [formData, setFormData] = useState({
    username: '',
    address: '',
    adharCard: null,
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data to the backend

    // Navigate to PaymentPage after submission
    navigate('/payment');
  };

  return (
    <div className="donate-container">
      <h1>Donate to the Cause</h1>
      <form className="donate-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />

        <label htmlFor="adharCard">Adhar Card (Upload Image)</label>
        <input type="file" name="adharCard" accept="image/*" onChange={handleChange} />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />

        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default DonatePage;
