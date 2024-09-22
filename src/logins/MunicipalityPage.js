import React from 'react';
import './MunicipalityPage.css'; // Import custom CSS if needed

function MunicipalityPage() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Municipality Officer Dashboard</h1>
      <p>Welcome to the Municipality Officer Dashboard. Here you can manage municipal tasks, check reports, and handle regional matters.</p>

      <div className="row mt-4">
        {/* Webcard 1: People's Needs */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">People's Needs</h5>
              <p className="card-text">
                View and manage the list of requests made by the people for assistance.
              </p>
              <a href="/view-needs" className="btn btn-primary">View People's Needs</a>
            </div>
          </div>
        </div>

        {/* Webcard 2: Update Donating Section */}
        <div className="col-md-6 mb-4">
          <div className="card shadow">
            <div className="card-body">
              <h5 className="card-title">Update Donating Section</h5>
              <p className="card-text">
                Update the items available for donation and track contributions for disaster relief.
              </p>
              <a href="/update-donations" className="btn btn-success">Update Donating Section</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MunicipalityPage;
