import React from 'react';
import TransactionList from './TransactionList';

function Dashboard({ transactions }) {
  return (
    <div className="Dashboard">
      <h2>Your Transactions</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;