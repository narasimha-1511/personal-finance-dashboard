import React from 'react';
import TransactionList from './TransactionList';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h2>Your Transactions</h2>
      <TransactionList />
    </div>
  );
}

export default Dashboard;