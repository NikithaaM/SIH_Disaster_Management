import React, { useState } from 'react';

function ClothesDonationForm() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [sizes, setSizes] = useState({
    small: 0,
    medium: 0,
    large: 0,
    extraLarge: 0,
  });

  const handleUserInfoChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSizeChange = (event) => {
    const { name, value } = event.target;
    setSizes({
      ...sizes,
      [name]: parseInt(value, 10),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log('Submitted user info:', userInfo);
    console.log('Submitted sizes:', sizes);
  };

  return (
    
    <div className="container" style={containerStyle}>
        <h2 style={headingStyle}>Donate Clothes</h2>
        <br></br>
      <form onSubmit={handleSubmit} style={formStyle}>
        <h3 style={sectionHeadingStyle}>User Information</h3>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={userInfo.name} 
            onChange={handleUserInfoChange} 
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={userInfo.email} 
            onChange={handleUserInfoChange} 
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Phone:</label>
          <input 
            type="tel" 
            name="phone" 
            value={userInfo.phone} 
            onChange={handleUserInfoChange} 
            required
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Address:</label>
          <textarea 
            name="address" 
            value={userInfo.address} 
            onChange={handleUserInfoChange} 
            required
            style={textareaStyle}
          />
        </div>
        
        <h3 style={sectionHeadingStyle}>Clothing Sizes</h3>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Small:</label>
          <input 
            type="number" 
            name="small" 
            value={sizes.small} 
            onChange={handleSizeChange} 
            min="0"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Medium:</label>
          <input 
            type="number" 
            name="medium" 
            value={sizes.medium} 
            onChange={handleSizeChange} 
            min="0"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Large:</label>
          <input 
            type="number" 
            name="large" 
            value={sizes.large} 
            onChange={handleSizeChange} 
            min="0"
            style={inputStyle}
          />
        </div>
        <div style={formGroupStyle}>
          <label style={labelStyle}>Extra Large:</label>
          <input 
            type="number" 
            name="extraLarge" 
            value={sizes.extraLarge} 
            onChange={handleSizeChange} 
            min="0"
            style={inputStyle}
          />
        </div>
        
        <button type="submit" style={buttonStyle}>Submit Donation</button>
      </form>
    </div>
  );
}

// CSS-in-JS styles
const containerStyle = {
  maxWidth: '600px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  backgroundColor: '#f9f9f9',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const sectionHeadingStyle = {
  marginBottom: '15px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

const formGroupStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const labelStyle = {
  flex: '1',
  marginRight: '10px',
  textAlign: 'right',
  fontWeight: 'bold',
};

const inputStyle = {
  flex: '2',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const textareaStyle = {
  flex: '2',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  resize: 'vertical',
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#28a745',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  alignSelf: 'center',
  marginTop: '20px',
};

buttonStyle[':hover'] = {
  backgroundColor: '#218838',
};

export default ClothesDonationForm;
