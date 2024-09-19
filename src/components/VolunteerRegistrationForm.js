import React, { useState } from 'react';

function VolunteerRegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    availability: 'weekdays',
    locationPreference: 'onsite',
    state: '',
    district: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Thank you for signing up! Confirmation will be sent via mail.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          gender: '',
          availability: 'weekdays',
          locationPreference: 'onsite',
          state: '',
          district: ''
        });
      } else {
        alert('Failed to register. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2 style={{ textAlign: 'center' }}>Volunteer Registration Form</h2>
      <br></br>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
        <label>
          Full Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        
        <label>
          Email Address:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>
        
        <label>
          Phone Number:
          <input 
            type="tel" 
            name="phone" 
            value={formData.phone} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>

        <label>
          Age:
          <input 
            type="number" 
            name="age" 
            value={formData.age} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            min="0"
          />
        </label>

        <label>
          Gender:
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
        </label>

        <label>
          Availability:
          <select 
            name="availability" 
            value={formData.availability} 
            onChange={handleChange} 
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="weekdays">Weekdays</option>
            <option value="weekends">Weekends</option>
            <option value="both">Both</option>
          </select>
        </label>

        <div>
          <label>Location Preference:</label>
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
            <label>
              <input 
                type="radio" 
                name="locationPreference" 
                value="onsite" 
                checked={formData.locationPreference === 'onsite'}
                onChange={handleChange}
                required 
              />
              Onsite
            </label>
            <label>
              <input 
                type="radio" 
                name="locationPreference" 
                value="offsite" 
                checked={formData.locationPreference === 'offsite'}
                onChange={handleChange}
                required 
              />
              Offsite
            </label>
          </div>
        </div>

        <label>
          State:
          <input 
            type="text" 
            name="state" 
            value={formData.state} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>

        <label>
          District:
          <input 
            type="text" 
            name="district" 
            value={formData.district} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </label>

        <button type="submit" style={{ padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}

export default VolunteerRegistrationForm;
