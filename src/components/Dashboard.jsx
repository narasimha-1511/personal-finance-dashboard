import React from "react";
import TransactionList from "./TransactionList";
import PieChart from "./PieChart";

function Dashboard({ transactions, onDeleteTransaction }) {
  return (
    <div className="Dashboard">
      <h2>Your Transactions</h2>
      <TransactionList
        transactions={transactions}
        onDeleteTransaction={onDeleteTransaction}
      />
      <PieChart transactions={transactions} />
    </div>
  );
}

export default Dashboard;
