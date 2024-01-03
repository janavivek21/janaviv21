// TransactionHistoryPage.js

import React from 'react';

const TransactionHistoryPage = () => {
  // Fake transaction history data (replace with actual data fetching)
  const transactionHistory = [
    { date: '2022-01-01', description: 'Payment received', amount: 500 },
    { date: '2022-01-05', description: 'Online purchase', amount: -200 },
    { date: '2022-01-10', description: 'Withdrawal', amount: -100 },
    { date: '2022-01-15', description: 'Deposit', amount: 300 },
    { date: '2022-01-20', description: 'Payment sent', amount: -150 },
    // Add more transactions as needed
  ];

  return (
    <div className="transaction-history-page">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionHistory.map((transaction, index) => (
            <tr key={index} className={transaction.amount >= 0 ? 'income' : 'expense'}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.amount >= 0 ? `+$${transaction.amount}` : `-$${Math.abs(transaction.amount)}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistoryPage;
