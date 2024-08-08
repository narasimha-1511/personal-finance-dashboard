import React, { useState } from "react";
import TransactionList from "./TransactionList";
import PieChart from "./PieChart";

function Dashboard({ transactions, onDeleteTransaction }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [...new Set(transactions.map((t) => t.category))];

  const filteredTransactions = selectedCategory
    ? transactions.filter((t) => t.category === selectedCategory)
    : transactions;

  return (
    <div className="Dashboard">
      <h2>Your Transactions</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
        <button onClick={() => setSelectedCategory(null)}>All</button>
      </div>
      <TransactionList
        transactions={filteredTransactions}
        onDeleteTransaction={onDeleteTransaction}
      />
      <PieChart transactions={filteredTransactions} />
    </div>
  );
}

export default Dashboard;
