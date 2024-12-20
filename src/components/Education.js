import React from 'react';

function Education() {
  return (
    <div className="container">
      <h1 align='center'>Disaster Awareness</h1>
      <p align='center'>This page provides information and resources on disaster preparedness, health and safety measures, and environmental awareness.</p>
      <br></br>

      {/* Video Container */}
      <div className="row" style={{ justifyContent: 'center' }}>
        {/* Landslide Video */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <video className="card-img-top" width="100%" height="200px" controls>
              <source src="/videos/landslide-awareness.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Landslide Safety</h5>
            </div>
          </div>
        </div>

        {/* Earthquake Video */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <video className="card-img-top" width="100%" height="200px" controls>
              <source src="/videos/earthquake-awareness.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Earthquake Safety</h5>
            </div>
          </div>
        </div>

        {/* Flood Video */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <video className="card-img-top" width="100%" height="200px" controls>
              <source src="/videos/flood-awareness.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="card-body">
              <h5 className="card-title">Flood Safety</h5>
            </div>
          </div>
        </div>
      </div>

      <p align='center'>Learn more about safety measures and preparedness techniques to stay safe during a disaster.</p>
    </div>
  );
}

export default Education;
