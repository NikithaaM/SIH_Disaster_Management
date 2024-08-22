import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images with the correct path
import riskMitigationImage from '../images/risk-mitigation.jpg';
import planningBeforeDisasterImage from '../images/planning-before-disaster.jpg';
import duringDisasterImage from '../images/during-disaster.jpg';
import recoveryAfterDisasterImage from '../images/recovery-after-disaster.jpg';
import image1 from '../images/image1.png';

function HomePage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // Transition every 6 seconds
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Welcome to Disaster Management</h1>
      <br />
      <p>
        Disaster management is a critical process involving risk mitigation and effective planning to protect lives, property, and resources. Explore the essential strategies and actions for managing disasters before, during, and after they occur.
      </p>

      {/* Image Transition Section */}
      <section>
        <Slider {...sliderSettings}>
          <div>
            <img src={image1} alt="Risk Mitigation" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={planningBeforeDisasterImage} alt="Planning Before a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={duringDisasterImage} alt="During a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={recoveryAfterDisasterImage} alt="Recovery After a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
        </Slider>
      </section>

      {/* Risk Mitigation Section */}
      <section>
        <h2>Risk Mitigation</h2>
        <img src={riskMitigationImage} alt="Risk Mitigation" style={{ width: '100%', height: 'auto' }} />
        <p>
          Risk mitigation involves identifying potential hazards, assessing vulnerabilities, and implementing measures to reduce the impact of disasters. This includes building resilient infrastructure, establishing early warning systems, and educating communities on disaster preparedness.
        </p>
      </section>

      {/* Planning Before a Disaster Section */}
      <section>
        <h2>Planning Before a Disaster</h2>
        <img src={planningBeforeDisasterImage} alt="Planning Before a Disaster" style={{ width: '100%', height: 'auto' }} />
        <p>
          Effective disaster management begins with thorough planning before a disaster strikes. This includes developing emergency response plans, conducting drills and simulations, and ensuring that resources such as food, water, and medical supplies are readily available. Preparedness helps minimize chaos and ensures a coordinated response when a disaster occurs.
        </p>
      </section>

      {/* During a Disaster Section */}
      <section>
        <h2>During a Disaster</h2>
        <img src={duringDisasterImage} alt="During a Disaster" style={{ width: '100%', height: 'auto' }} />
        <p>
          During a disaster, quick and decisive action is crucial. This involves activating emergency response plans, communicating with affected communities, and coordinating rescue and relief efforts. The goal is to protect lives and property while managing the immediate impact of the disaster.
        </p>
      </section>

      {/* Recovery After a Disaster Section */}
      <section>
        <h2>Recovery After a Disaster</h2>
        <img src={recoveryAfterDisasterImage} alt="Recovery After a Disaster" style={{ width: '100%', height: 'auto' }} />
        <p>
          Recovery involves restoring normalcy to affected areas after a disaster. This includes rebuilding infrastructure, providing psychological and financial support to victims, and implementing lessons learned to improve future disaster preparedness. Recovery is a long-term process that requires coordination and collaboration across various sectors.
        </p>
      </section>
    </div>
  );
}

export default HomePage;
