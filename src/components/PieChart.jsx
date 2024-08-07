import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ transactions }) {
  const categoryTotals = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      acc[transaction.category] = (acc[transaction.category] || 0) + Math.abs(transaction.amount);
    }
    return acc;
  }, {});

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [{
      data: Object.values(categoryTotals),
      backgroundColor: [
        '#FF6384',
        '#36A2EB',
        '#FFCE56',
        '#4BC0C0',
        '#9966FF',
      ],
    }],
  };

  return (
    <div className="PieChart">
      <h3>Spending by Category</h3>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;