import './PaymentGateWay.css';
import React, { useState, useEffect } from 'react';

function PaymentGateway() {
  const [amount, setAmount] = useState('');

  // Dynamically load the Razorpay SDK script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up script when component unmounts
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === '') {
      alert('Please enter an amount');
    } else {
      var options = {
        key: 'rzp_test_x5R1mCwyiFA5F8',
        key_secret: '9ORsFzPAfFagwyRTk4BU34yz', // Remove this in production for security
        amount: amount * 100,
        currency: 'INR',
        name: 'STARTUP_PROJECTS',
        description: 'For testing purpose',
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: 'Velmurugan',
          email: 'mvel1620r@gmail.com',
          contact: '7904425033',
        },
        notes: {
          address: 'Razorpay Corporate office',
        },
        theme: {
          color: '#3399cc',
        },
      };
      
      if (window.Razorpay) {
        var pay = new window.Razorpay(options);
        pay.open();
      } else {
        alert("Razorpay SDK is not loaded yet. Please try again later.");
      }
    }
  };

  return (
    <div className="App">
      <h2>Make Your Contribution</h2>
      <br />
      <input
        type="text"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PaymentGateway;
