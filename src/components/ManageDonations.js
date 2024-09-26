import React from 'react';
import { Link } from 'react-router-dom';

function ManageDonations() {
  return (
    <div className="container mt-5">
      <h2>Manage Donations</h2>
      <p>This section allows you to manage and track donation activities.</p>

      <div className="row">
        {/* Municipality Request Card */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Municipality Request</h5>
              <p className="card-text">Submit and track requests from municipalities.</p>
              <Link to="/municipality-request" className="btn btn-primary">View Requests</Link>
            </div>
          </div>
        </div>


        {/* Manage Inventory Card */}
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Manage Inventory</h5>
              <p className="card-text">Manage existing donation items and supplies.</p>
              <Link to="/manage-inventory" className="btn btn-primary">Manage Inventory</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDonations;
