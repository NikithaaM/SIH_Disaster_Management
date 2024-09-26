import React, { useState } from 'react';
import './YourNeeds.css'; // Import CSS file

function YourNeeds() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    identityProof: null,
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, identityProof: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formSubmission = new FormData();
    formSubmission.append('name', formData.name);
    formSubmission.append('address', formData.address);
    formSubmission.append('identityProof', formData.identityProof);
    formSubmission.append('comments', formData.comments);

    try {
      const response = await fetch('http://localhost:5009/submit-form', {
        method: 'POST',
        body: formSubmission,
      });

      const result = await response.json();
      if (result.success) {
        alert('Form submitted successfully');
      } else {
        alert('Error: ' + result.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form.');
    }
  };

  return (
    <div className="container my-5 your-needs-container">
      <h2 className="form-heading">Your Needs</h2>
      <p>Please fill out the form to request assistance.</p>
      <form onSubmit={handleSubmit} className="needs-form" encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input 
            type="text" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            className="form-control" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="identityProof">Identity Proof</label>
          <input 
            type="file" 
            id="identityProof" 
            name="identityProof" 
            onChange={handleFileChange} 
            className="form-control-file" 
            accept=".jpg,.jpeg,.png,.pdf" 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="comments">Specify Your Needs</label>
          <textarea 
            id="comments" 
            name="comments" 
            value={formData.comments} 
            onChange={handleChange} 
            className="form-control" 
            rows="4" 
            required 
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default YourNeeds;
