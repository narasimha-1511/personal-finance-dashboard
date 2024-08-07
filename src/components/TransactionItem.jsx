import React from 'react';

function TransactionItem({ transaction }) {
  return (
    <li className="TransactionItem">
      <span>{transaction.date}</span>
      <span>{transaction.description}</span>
      <span className={transaction.amount >= 0 ? 'income' : 'expense'}>
        ${Math.abs(transaction.amount)}
      </span>
    </li>
  );
}

export default TransactionItem;