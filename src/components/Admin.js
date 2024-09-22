import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminPage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Message System Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Message System</h5>
              <p className="card-text">
                This section allows you to manage messages sent to and from the users.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigate('/message-system')} // Navigate to Message System component
              >
                Go to Message System
              </button>
            </div>
          </div>
        </div>

        {/* Manage Donate Section Card */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Donations</h5>
              <p className="card-text">
                Here you can manage the donation system and keep track of available items.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => handleNavigate('/manage-donations')} // Navigate to ManageDonations component
              >
                Manage Donations
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
