import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UpdateDonations() {
  const [formData, setFormData] = useState({
    officerName: '',
    phoneNumber: '',
    location: '',
    productRequirementCount: 0,
    products: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProductRequirementCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    const newProducts = Array.from({ length: count }, () => ({
      productName: '',
      productQuantity: ''
    }));
    setFormData({ ...formData, productRequirementCount: count, products: newProducts });
  };

  const handleProductChange = (index, field, value) => {
    const newProducts = [...formData.products];
    newProducts[index][field] = value;
    setFormData({ ...formData, products: newProducts });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/update-donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted:', result);
        // Display success toast
        toast.success('Donation updated successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        throw new Error('Error submitting form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Display error toast
      toast.error('Error submitting form. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2>Update Donating Section</h2>
      <p>Here you can update the available items for donation and track contributions.</p>

      <form onSubmit={handleSubmit} className="needs-form">
        <div className="form-group">
          <label htmlFor="officerName">Municipality Officer Name</label>
          <input
            type="text"
            id="officerName"
            name="officerName"
            value={formData.officerName}
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
        <div className="form-group">
          <label htmlFor="productRequirementCount">Number of Product Requirements</label>
          <input
            type="number"
            id="productRequirementCount"
            name="productRequirementCount"
            value={formData.productRequirementCount}
            onChange={handleProductRequirementCountChange}
            className="form-control"
            required
          />
        </div>

        {formData.products.map((product, index) => (
          <div key={index} className="form-group d-flex align-items-center">
            <label htmlFor={`productName-${index}`} className="mr-2">Product Name</label>
            <input
              type="text"
              id={`productName-${index}`}
              value={product.productName}
              onChange={(e) => handleProductChange(index, 'productName', e.target.value)}
              className="form-control mr-2"
              required
            />
            <label htmlFor={`productQuantity-${index}`} className="mr-2">Product Quantity</label>
            <input
              type="number"
              id={`productQuantity-${index}`}
              value={product.productQuantity}
              onChange={(e) => handleProductChange(index, 'productQuantity', e.target.value)}
              className="form-control"
              required
            />
          </div>
        ))}

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
