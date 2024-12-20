import React, { useState, useEffect } from 'react';

function CounselorDashboard() {
  const [requests, setRequests] = useState([]);
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [acceptedRequestId, setAcceptedRequestId] = useState(null); // Track accepted request
  const [successMessage, setSuccessMessage] = useState(''); // For showing success messages
  const [showPending, setShowPending] = useState(true); // Toggle between pending and accepted requests

  // Fetch pending requests from backend
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch('http://localhost:5060/api/sessions');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setRequests(data);
      } catch (err) {
        setError('Error fetching requests');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const fetchAcceptedRequests = async () => {
      try {
        const response = await fetch('http://localhost:5060/api/sessions/accepted');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAcceptedRequests(data);
      } catch (err) {
        setError('Error fetching accepted requests');
        console.error(err);
      }
    };

    fetchRequests();
    fetchAcceptedRequests();
  }, []);

  // Handle request acceptance
  const handleAcceptRequest = async (requestId, name) => {
    try {
      const response = await fetch('http://localhost:5060/api/sessions/accept', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ requestId })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Update the UI to reflect the acceptance
      setRequests(prevRequests => prevRequests.filter(request => request._id !== requestId)); // Remove accepted request
      setAcceptedRequestId(requestId);
      setSuccessMessage(`Dr. ${name} has confirmed the appointment.`);

      // Clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
        setAcceptedRequestId(null);
      }, 3000);

    } catch (err) {
      console.error('Error accepting request', err);
    }
  };

  if (loading) return <p>Loading requests...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mt-5">
      <h1>Counselor Dashboard</h1>
      <p>Welcome to your dashboard. Here you can manage counseling sessions and interact with clients.</p>

      {successMessage && (
        <div
          className="alert alert-success"
          style={{
            position: 'fixed',
            top: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: '80%',
            textAlign: 'center'
          }}
        >
          <p>{successMessage}</p>
        </div>
      )}

      {/* Toggle buttons */}
      <div className="d-flex justify-content-center mb-4">
        <button
          className={`btn btn-primary ${showPending ? 'active' : ''}`}
          onClick={() => setShowPending(true)}
        >
          Pending Requests
        </button>
        <button
          className={`btn btn-secondary ml-2 ${!showPending ? 'active' : ''}`}
          onClick={() => setShowPending(false)}
        >
          Accepted Requests
        </button>
      </div>

      {/* Pending Requests Section */}
      {showPending && (
        <>
          <h2>Pending Requests</h2>
          <ul className="list-group">
            {requests.length > 0 ? (
              requests.map(request => (
                <li
                  key={request._id}
                  className="list-group-item position-relative"
                  style={{
                    position: 'relative',
                    padding: '20px',
                    borderRadius: '5px',
                    backgroundColor: '#f8f9fa',
                    marginBottom: '10px'
                  }}
                >
                  <h5>{request.name}</h5>
                  <p><strong>Address:</strong> {request.address}</p>
                  <p><strong>Phone:</strong> {request.phoneNumber}</p>
                  <p><strong>Email:</strong> {request.email}</p>
                  <p><strong>Issue:</strong> {request.issue}</p>
                  <button
                    className="btn btn-success"
                    onClick={() => handleAcceptRequest(request._id, request.name)}
                    disabled={acceptedRequestId === request._id} // Disable the button if the request is accepted
                  >
                    {acceptedRequestId === request._id ? 'Accepted' : 'Accept Request'}
                  </button>
                </li>
              ))
            ) : (
              <p>No pending requests.</p>
            )}
          </ul>
        </>
      )}

      {/* Accepted Requests Section */}
      {!showPending && (
        <>
          <h2>Accepted Requests</h2>
          <ul className="list-group">
            {acceptedRequests.length > 0 ? (
              acceptedRequests.map(request => (
                <li
                  key={request._id}
                  className="list-group-item position-relative"
                  style={{
                    position: 'relative',
                    padding: '20px',
                    borderRadius: '5px',
                    backgroundColor: '#e9f7ef',
                    marginBottom: '10px'
                  }}
                >
                  <h5>{request.name}</h5>
                  <p><strong>Address:</strong> {request.address}</p>
                  <p><strong>Phone:</strong> {request.phoneNumber}</p>
                  <p><strong>Email:</strong> {request.email}</p>
                  <p><strong>Issue:</strong> {request.issue}</p>
                  <p><strong>Accepted by Dr.:</strong> {request.doctorName}</p>
                </li>
              ))
            ) : (
              <p>No accepted requests.</p>
            )}
          </ul>
        </>
      )}
    </div>
  );
}

export default CounselorDashboard;
