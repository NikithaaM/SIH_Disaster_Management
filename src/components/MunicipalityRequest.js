import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function MunicipalityRequest() {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch donations from the backend when the component mounts
  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/donations');
        setDonations(response.data);
      } catch (error) {
        console.error('Error fetching donations:', error);
        toast.error('Failed to load donations');
      } finally {
        setLoading(false);
      }
    };

    fetchDonations();
  }, []);

  // Delete a donation by its ID
  const deleteDonation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/donations/${id}`);
      setDonations(donations.filter((donation) => donation._id !== id));
      toast.success('Data deleted successfully');
    } catch (error) {
      console.error('Error deleting donation:', error);
      toast.error('Failed to delete donation');
    }
  };

  // Accept a donation by its ID and save products to localStorage
  const acceptDonation = async (id) => {
    try {
      const response = await axios.post(`http://localhost:5000/api/accept-donation/${id}`);
      const acceptedProducts = response.data.donation.products;

      // Store the accepted products in localStorage
      localStorage.setItem('acceptedProducts', JSON.stringify(acceptedProducts));

      toast.success('Donation accepted successfully');
      navigate('/update-inventory');
    } catch (error) {
      console.error('Error accepting donation:', error);
      toast.error('Failed to accept donation');
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Municipality Requests</h2>
      <p>Here you can view and manage all requests from municipalities.</p>

      {donations.length > 0 ? (
        <div>
          {donations.map((donation, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Officer: {donation.officerName}</h5>
                <p className="card-text">Phone Number: {donation.phoneNumber}</p>
                <p className="card-text">Location: {donation.location}</p>
                <h6>Products:</h6>
                <ul>
                  {donation.products.map((product, idx) => (
                    <li key={idx}>
                      {product.productName} - {product.productQuantity}
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteDonation(donation._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => acceptDonation(donation._id)}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No donations found.</p>
      )}

      <ToastContainer />
    </div>
  );
}

export default MunicipalityRequest;
