import React, { useState } from 'react';
import './YourNeeds.css'; // Import CSS file

function YourNeeds() {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    identityProof: null, // Initialize with null for file
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, identityProof: e.target.files[0] }); // Get the uploaded file
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Handle form submission
    console.log('Form submitted:', formData);

    // You can use FormData to handle file uploads for further processing (e.g., sending it to an API)
    const formSubmission = new FormData();
    formSubmission.append('name', formData.name);
    formSubmission.append('address', formData.address);
    formSubmission.append('identityProof', formData.identityProof); // File upload
    formSubmission.append('comments', formData.comments);

    // Submit formSubmission to the backend
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
            accept=".jpg,.jpeg,.png,.pdf" // Accept only certain file types
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
