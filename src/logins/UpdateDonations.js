import React, { useState } from 'react';

function UpdateDonations() {
  const [formData, setFormData] = useState({
    productName: '',
    phoneNumber: '',
    productRequired: '',
    productQuantity: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can add the code to submit the form data to your backend
    console.log('Form submitted:', formData);
    // For example, you might want to send it to your API
  };

  return (
    <div className="container mt-5">
      <h2>Update Donating Section</h2>
      <p>Here you can update the available items for donation and track contributions.</p>

      <form onSubmit={handleSubmit} className="needs-form">
        <div className="form-group">
          <label htmlFor="productName">Municipality Officer Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group d-flex align-items-center">
        <label htmlFor="productRequired" className="mr-2">Product Required</label>
          <input
            type="text"
            id="productRequired"
            name="productRequired"
            value={formData.productRequired}
            onChange={handleChange}
            className="form-control"
            required
          />
          <label htmlFor="productQuantity" className="mr-2">Product Quantity</label>
          <input
            type="number"
            id="productQuantity"
            name="productQuantity"
            value={formData.productQuantity}
            onChange={handleChange}
            className="form-control mr-2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Update Donation</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateDonations;
