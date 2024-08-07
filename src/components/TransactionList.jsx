import React from "react";
import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <ul className="TransactionList">
      {transactions.map((transaction) => (
        <TransactionItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDeleteTransaction}
        />
      ))}
    </ul>
  );
}

export default TransactionList;
