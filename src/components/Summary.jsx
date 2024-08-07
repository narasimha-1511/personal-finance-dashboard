import React from "react";
import IncomeExpenseChart from "./IncomeExpenseChart";

function Summary({ transactions }) {
  const income = transactions
    .filter((t) => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  const balance = income - expenses;

  return (
    <div className="Summary">
      <h2>Financial Summary</h2>
      <div>
        <p>Total Income: ${income.toFixed(2)}</p>
        <p>Total Expenses: ${expenses.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p>
      </div>
      <IncomeExpenseChart income={income} expenses={expenses} />
    </div>
  );
}

export default Summary;
