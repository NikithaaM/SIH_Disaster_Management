import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentPage.css';

function PaymentPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Create and append the Razorpay script
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleProceedToPay = () => {
    navigate('/payment-gateway');
  };

  return (
    <div className="payment-container">
      <h2>Payment Page</h2>
      <p>Thank you for your contribution. Proceed with the payment to complete your donation.</p>
      <button onClick={handleProceedToPay}>Proceed to Pay</button>
    </div>
  );
}

export default PaymentPage;
