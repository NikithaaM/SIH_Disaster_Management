import React from 'react';
import { Link } from 'react-router-dom';
import './LogoDescription.css';
import earthImage from '../images/Earth.jpeg'; 
import goonjImage from '../images/Goonj.png';

const LogoDescription = () => {
  const logos = [
    { 
      src: earthImage,
      alt: 'Earth Logo',
      description: 'Sangamithra Environmental Education & Development Trust.',
      link: '/full-description'
    },
    { 
      src: goonjImage, 
      alt: 'Logo 2',
      description: 'Goonj fosters dignity and development by connecting urban resources with rural needs.',
      link: '/goonj-description'
    },
  ];

  return (
    <div className="logo-description-page">
      <h1 className="page-heading">Our Collaborators</h1>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <div className="logo-card" key={index}>
            <Link to={logo.link}>
              <img src={logo.src} alt={logo.alt} className="logo-image" />
            </Link>
            <p className="logo-description">{logo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDescription;
