import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images with the correct path
import riskMitigationImage from '../images/risk-mitigation.jpg';
import planningBeforeDisasterImage from '../images/planning-before-disaster.jpg';
import duringDisasterImage from '../images/during-disaster.jpg';
import recoveryAfterDisasterImage from '../images/recovery-after-disaster.jpg';
import image1 from '../images/image1.png';
import image2 from '../images/hurricane.jpg';
import image3 from '../images/earthquake.jpg';
import image4 from '../images/rescue.jpg';

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

  useEffect(() => {
    try {
      // Create and append the chatbot script
      const script1 = document.createElement('script');
      script1.src = "https://www.chatbase.co/embed.min.js";
      script1.dataset.chatbotId = "EWbwH6vYjS0OO6cInPzof";
      script1.dataset.domain = "www.chatbase.co";
      script1.defer = true;
      document.body.appendChild(script1);

      // Create and append the chatbot configuration
      const script2 = document.createElement('script');
      script2.text = `
        window.embeddedChatbotConfig = {
          chatbotId: "EWbwH6vYjS0OO6cInPzof",
          domain: "www.chatbase.co"
        }
      `;
      document.body.appendChild(script2);

      return () => {
        // Cleanup scripts when the component is unmounted
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    } catch (error) {
      console.error("Error loading chatbot scripts:", error);
    }
  }, []);

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Welcome to Crisis Compass</h1>
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
            <img src={image2} alt="Planning Before a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={image3} alt="During a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div>
            <img src={image4} alt="Recovery After a Disaster" style={{ width: '100%', height: 'auto' }} />
          </div>
        </Slider>
      </section>
      <br />
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

      {/* Chatbot iframe */}
      <section>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/EWbwH6vYjS0OO6cInPzof"
          style={{ width: '10%', height: '40px', border: 'none' }}
          title="Disaster Management Chatbot"
        ></iframe>
      </section>
    </div>
  );
}

export default HomePage;
