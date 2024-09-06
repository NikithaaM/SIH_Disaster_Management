import React from 'react';
import { useNavigate } from 'react-router-dom';

function DuringDisaster() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 style={{ textAlign: 'center' }}>During the Disaster</h2>
      <p style={{ textAlign: 'center' }}>"In times of need, our shared humanity is our greatest strength."</p>
      
      <div className="card"
        style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
        <h3 style={{ textAlign: 'center' }}>Donate Food</h3>
        <p>Provide essential food supplies to those in need. Your contribution can make a significant difference during a disaster.</p>
        <button onClick={() => navigate('/donate-food')}>Donate Food</button>
      </div>

      <br/><br/>

      <div 
        className="card"
        style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
      >
        <h3 style={{ textAlign: 'center' }}>Donate Clothes</h3>
        <p>Help keep people warm and dry by donating clothes. Your support is crucial during this time of need.</p>
        <button onClick={() => navigate('/donate-clothes')}>Donate Clothes</button>
      </div>

      <br/><br/>

      <div 
        className="card"
        style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}
      >
        <h3 style={{ textAlign: 'center' }}>Donate Essential Items</h3>
        <p>Provide crucial items like hygiene products, blankets, and medical supplies to support affected individuals during the disaster.</p>
        <button onClick={() => navigate('/donate-essential-items')}>Donate Essential Items</button>
      </div>

      <br/>
    </div>
  );
}

export default DuringDisaster;
