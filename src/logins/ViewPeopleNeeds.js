import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Axios to make HTTP requests

function ViewPeopleNeeds() {
  // State to hold the list of needs
  const [needs, setNeeds] = useState([]);

  // Fetch the data from the backend when the component loads
  useEffect(() => {
    const fetchNeeds = async () => {
      try {
        const response = await axios.get('http://localhost:5009/api/yourneeds'); // API call to backend
        setNeeds(response.data); // Set the fetched data to the state
      } catch (error) {
        console.error('Error fetching needs:', error);
      }
    };

    fetchNeeds(); // Call the fetch function
  }, []);

  return (
    <div className="container mt-5">
      <h2>View People's Needs</h2>
      <p>Here you can see the list of requests made by people for assistance.</p>

      {needs.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul className="list-group">
          {needs.map((need) => (
            <li key={need._id} className="list-group-item">
              <h5>{need.name}</h5>
              <p><strong>Address:</strong> {need.address}</p>
              <p><strong>Comments:</strong> {need.comments}</p>
              <p><strong>Identity Proof:</strong> 
                <a href={`http://localhost:5009/uploads/${need.identityProof}`} target="_blank" rel="noopener noreferrer">View Proof</a>
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ViewPeopleNeeds;
