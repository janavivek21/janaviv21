
// EnterAmountPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnterAmountPage = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState('');

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleConfirmButtonClick = () => {
    if (amount) {
      navigate('/loading');
      setTimeout(() => {
        navigate('/success');
      }, 2000);
    } else {
      alert('Please enter the amount');
    }
  };

  return (
    <div className="enter-amount-page">
      <h2>Enter Amount</h2>
      <input
        type="text"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
      />
      <button className="confirm-button" onClick={handleConfirmButtonClick}>
        Confirm
      </button>
    </div>
  );
};

export default EnterAmountPage;
