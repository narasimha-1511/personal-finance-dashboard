import React from "react";

function TransactionItem({ transaction }) {
  return (
    <li className="TransactionItem">
      <span>{transaction.date}</span>
      <span>{transaction.description}</span>
      <span>{transaction.category}</span>
      <span className={transaction.amount >= 0 ? "income" : "expense"}>
        ${Math.abs(transaction.amount).toFixed(2)}
      </span>
    </li>
  );
}

export default TransactionItem;
