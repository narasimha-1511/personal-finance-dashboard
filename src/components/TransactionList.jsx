import React from 'react';
import TransactionItem from './TransactionItem';

const initialTransactions = [
  { id: 1, description: 'Grocery shopping', amount: -50, date: '2024-08-07' },
  { id: 2, description: 'Salary', amount: 2000, date: '2024-08-01' },
];

function TransactionList() {
  return (
    <ul className="TransactionList">
      {initialTransactions.map(transaction => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;