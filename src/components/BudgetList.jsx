import React from "react";
import BudgetItem from "./BudgetItem";

function BudgetList({ budgets, transactions, onDeleteBudget }) {
  return (
    <div className="BudgetList">
      <h2>Budget Tracking</h2>
      {budgets.map((budget) => (
        <BudgetItem
          key={budget.id}
          budget={budget}
          transactions={transactions}
          onDelete={onDeleteBudget}
        />
      ))}
    </div>
  );
}

export default BudgetList;
