import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions }) {
  return (
    <ul className="TransactionList">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
}

export default TransactionList;
