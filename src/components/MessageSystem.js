import React, { useState, useEffect } from 'react';

function MessageSystem() {
  const [message, setMessage] = useState('');
  const [volunteers, setVolunteers] = useState([]);

  // Fetch the volunteers when the component loads
  useEffect(() => {
    const fetchVolunteers = async () => {
      const response = await fetch('http://localhost:5000/api/volunteers');
      const data = await response.json();
      setVolunteers(data);
    };
    fetchVolunteers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const targetEmails = volunteers.map((volunteer) => volunteer.email);

    try {
      const response = await fetch('http://localhost:5000/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, targetEmails }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setMessage('');
      } else {
        alert('Failed to send the message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Admin Message Sender</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ width: '100%', height: '100px', padding: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="volunteers">Select Volunteers:</label>
          <select
            id="volunteers"
            name="volunteers"
            multiple
            value={volunteers.map(volunteer => volunteer._id)}
            disabled
            style={{ width: '100%', padding: '10px' }}
          >
            {volunteers.map((volunteer) => (
              <option key={volunteer._id} value={volunteer._id}>
                {volunteer.name} - {volunteer.email}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" style={{ marginTop: '20px', padding: '10px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default MessageSystem;
