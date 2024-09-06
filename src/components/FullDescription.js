
import React from 'react';
import './FullDescription.css'; // Import the CSS file

const FullDescription = () => {
  return (
    <div className="full-description-container">
      <h2>Sangamithra Environmental Education & Development Trust</h2>
      <img
        src={require('../images/Earth.jpeg')} // Update the path to your image
        alt="Earth Logo"
        className="full-description-image"
      />
      <p>
        Sangamithra Environmental Education & Development Trust is promoted by S.V. Kanenahesvari at Coimbatore. We work hard to provide excellent customer service to all our clients.
      </p>
      <p>
        SANGAMITHRA ENVIRONMENTAL EDUCATION AND DEVELOPMENT TRUST, based in Coimbatore, is a Non-Governmental Organization (NGO) committed to environmental education and sustainable development. Established in 2010, our trust has emerged as a prominent player in the field of education and development.
      </p>
      <h3>Here’s what sets us apart:</h3>
      <ul>
        <li><strong>Holistic Approach:</strong> We believe in fostering a holistic understanding of environmental issues. Our initiatives encompass education, awareness, and action.</li>
        <li><strong>Community-Centric:</strong> As a one-stop destination, we serve both local residents and individuals from other parts of Coimbatore. Our services are accessible to all.</li>
        <li><strong>Registered and Committed:</strong> We operate under the Charitable and Religious Trust Act No. 120, ensuring transparency and accountability.</li>
      </ul>
      <h3>Our Services:</h3>
      <ul>
        <li>Women’s Day Celebrations: Empowering women and celebrating their achievements.</li>
        <li>International Girls’ Child Day: Advocating for the rights and well-being of girls.</li>
        <li>Tree Plantation Programs: Contributing to a greener environment.</li>
        <li>Self-Help Group Training Programs: Equipping individuals with skills for self-reliance.</li>
        <li>Drug Addiction Awareness: Promoting awareness and prevention.</li>
        <li>Sapling Plantation Functions: Nurturing the future through tree planting.</li>
        <li>Stress Relief Competitions: Encouraging mental well-being.</li>
      </ul>
      <p>At SANGAMITHRA, we believe that environmental education is a powerful tool for positive change. Join us in creating a sustainable and resilient future!</p>
      <h3>Additional Initiatives:</h3>
      <ul>
        <li>Street Children Rehabilitation</li>
        <li>Bonded Labor Eradication and Awareness Activities</li>
        <li>Life Skill Training and Vocational Training Programme for Under Privileged Families for the Women and Youth.</li>
        <li>Health Awareness And Free Eye Camp & Health Camp Activities.</li>
        <li>Promotion of Self-Empowerment and Empowerment for the Tribal Welfare.</li>
        <li>Prevention of Road Accident and Road Safety Awareness.</li>
        <li>Formation of Internal Complaint Committee in Industries, Textile Mills, Factories, Private Sectors & All Education Institutions.</li>
      </ul>
    </div>
  );
};

export default FullDescription;
