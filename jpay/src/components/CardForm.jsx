// CardForm.js

import React from 'react';
import { Link } from 'react-router-dom';

const CardForm = () => {
  const handleCardPayment = (e) => {
    e.preventDefault();
    // Add logic for card payment
    console.log('Processing card payment');
  };

  return (
    <form onSubmit={handleCardPayment} className="payment-form card-form">
      <h3>Card Payment</h3>
      <label>
        Card Number:
        <input type="text" name="cardNumber" required />
      </label>
      <label>
        Expiry Date:
        <input type="text" name="expiryDate" required />
      </label>
      <label>
        CVV:
        <input type="text" name="cvv" required />
      </label>
      <button type="submit"><Link to={'/EnterAmountPage'}> Pay with Card</Link></button>
    </form>
  );
};

export default CardForm;
