import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([
    { id: 1, description: 'Grocery shopping', amount: -50, date: '2024-08-07' },
    { id: 2, description: 'Salary', amount: 2000, date: '2024-08-01' },
  ]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, { ...newTransaction, id: Date.now() }]);
  };

  return (
    <div className="App">
      <h1>Personal Finance Dashboard</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <Dashboard transactions={transactions} />
    </div>
  );
}

export default App;