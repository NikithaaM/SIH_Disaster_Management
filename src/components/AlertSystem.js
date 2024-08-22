import React, { useState, useEffect } from 'react';

function AlertSystem() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const apiKey = 'e27c2353f432b619e4fc5460f45b96c3'; // Replace with your OpenWeather API key
      const url = `https://api.openweathermap.org/data/2.5/alerts?lat=11.7166&lon=76.1234&appid=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.alerts) {
          setAlerts(data.alerts);
        }
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };

    fetchAlerts();
  }, []);

  return (
    <div>
      {alerts.length > 0 ? (
        <div className="alert-banner">
          <h2>Natural Disaster Alerts</h2>
          {alerts.map((alert, index) => (
            <div key={index} className="alert-item">
              <h3>{alert.event}</h3>
              <p>{alert.description}</p>
              <p><strong>Affected Areas:</strong> {alert.areas.join(', ')}</p>
              <p><strong>Severity:</strong> {alert.severity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No active disaster alerts at this time.</p>
      )}
    </div>
  );
}

export default AlertSystem;
