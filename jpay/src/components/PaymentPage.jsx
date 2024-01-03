// PaymentPage.js

import React, { useState } from 'react';
import CardForm from './CardForm';
import UPIForm from './UPIform';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState('card');

  return (
    <div className="payment-page">
      <h2>Payment Page</h2>

      <div className="payment-options">
        <button onClick={() => setSelectedOption('card')}>Card</button>
        <button onClick={() => setSelectedOption('upi')}>UPI</button>
      </div>

      {selectedOption === 'card' ? <CardForm /> : <UPIForm />}
    </div>
  );
};

export default PaymentPage;
