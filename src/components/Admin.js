import React, { useState } from 'react';

function Admin() {
  const [disasterMessage, setDisasterMessage] = useState('');
  const [recipientPhoneNumbers, setRecipientPhoneNumbers] = useState([]);

  const handleSendNotification = () => {
    const phoneNumbers = recipientPhoneNumbers.split(',').map(number => number.trim());

    fetch('http://localhost:3001/send-alert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        disasterMessage,
        recipientPhoneNumbers: phoneNumbers,
      }),
    })
      .then(response => response.text())
      .then(data => {
        console.log('Notification sent successfully:', data);
        alert('Notification sent successfully!');
      })
      .catch(error => {
        console.error('Error sending notification:', error);
      });
  };

  return (
    <div className="admin-page text-center mt-5">
      <h1>Welcome to the Admin Dashboard</h1>
      <div className="form-group">
        <label>Disaster Message</label>
        <input
          type="text"
          className="form-control"
          value={disasterMessage}
          onChange={(e) => setDisasterMessage(e.target.value)}
          placeholder="Enter disaster message"
        />
      </div>
      <div className="form-group">
        <label>Recipient Phone Numbers (comma-separated)</label>
        <input
          type="text"
          className="form-control"
          value={recipientPhoneNumbers}
          onChange={(e) => setRecipientPhoneNumbers(e.target.value)}
          placeholder="Enter phone numbers"
        />
      </div>
      <button className="btn btn-warning mt-4" onClick={handleSendNotification}>
        Send Notification
      </button>
    </div>
  );
}

export default Admin;
