import React from "react";

function BudgetItem({ budget, transactions, onDelete }) {
  const spent = transactions
    .filter((t) => t.category === budget.category && t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const percentage = (spent / budget.limit) * 100;

  return (
    <div className="BudgetItem">
      <h3>{budget.category}</h3>
      <p>Budget: ${budget.limit}</p>
      <p>Spent: ${spent.toFixed(2)}</p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            backgroundColor: percentage > 100 ? "red" : "green",
          }}
        ></div>
      </div>
      <p>{percentage.toFixed(2)}% used</p>
      {percentage > 90 && (
        <p className="warning">Warning: Approaching budget limit!</p>
      )}
      <button onClick={() => onDelete(budget.id)}>Delete Budget</button>
    </div>
  );
}

export default BudgetItem;
