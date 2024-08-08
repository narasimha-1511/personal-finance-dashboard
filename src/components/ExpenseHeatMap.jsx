import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

function ExpenseHeatmap({ transactions }) {
  const today = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);

  const expensesByDate = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      const date = transaction.date;
      acc[date] = (acc[date] || 0) + Math.abs(transaction.amount);
    }
    return acc;
  }, {});

  const heatmapData = Object.keys(expensesByDate).map((date) => ({
    date,
    count: expensesByDate[date],
  }));

  return (
    <div className="ExpenseHeatmap">
      <h2>Expense Heatmap</h2>
      <CalendarHeatmap
        startDate={oneYearAgo}
        endDate={today}
        values={heatmapData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-scale-${Math.min(Math.floor(value.count / 50), 4)}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date}: $${value.count?.toFixed(2) || 0}`,
          };
        }}
      />
    </div>
  );
}

export default ExpenseHeatmap;
