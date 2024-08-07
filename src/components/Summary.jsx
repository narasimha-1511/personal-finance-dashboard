import React from "react";
import IncomeExpenseChart from "./IncomeExpenseChart";
import GoalProjectionChart from "./GoalProjectionChart";

function Summary({ transactions, budgets, goals }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = income - expenses;

  const totalBudget = budgets.reduce((sum, b) => sum + b.limit, 0);

  return (
    <div className="Summary">
      <h2>Financial Summary</h2>
      <div>
        <p>Total Income: ${income.toFixed(2)}</p>
        <p>Total Expenses: ${expenses.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p>
        <p>Total Budget: ${totalBudget.toFixed(2)}</p>
      </div>
      <IncomeExpenseChart income={income} expenses={expenses} />
      <GoalProjectionChart goals={goals} balance={balance} />
    </div>
  );
}

export default Summary;
