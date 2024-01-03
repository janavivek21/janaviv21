// UPIForm.js

import React from 'react';
import { Link } from 'react-router-dom';

const UPIForm = () => {
  const handleUpiPayment = (e) => {
    e.preventDefault();
    // Add logic for UPI payment
    console.log('Processing UPI payment');
  };

  return (
    <form onSubmit={handleUpiPayment} className="payment-form upi-form">
      <h3>UPI Payment</h3>
      <label>
        UPI ID:
        <input type="text" name="upiId" required />
      </label>

      <button type="submit"><Link to={'/EnterAmountPage'}> Pay using UPI</Link></button>
    </form>
  );
};

export default UPIForm;
