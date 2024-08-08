import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// ... rest of the component code

function SpendingTrendsChart({ transactions }) {
  const monthlyExpenses = transactions.reduce((acc, transaction) => {
    if (transaction.amount < 0) {
      const date = new Date(transaction.date);
      const monthYear = `${date.getFullYear()}-${date.getMonth() + 1}`;
      acc[monthYear] = (acc[monthYear] || 0) + Math.abs(transaction.amount);
    }
    return acc;
  }, {});

  const sortedMonths = Object.keys(monthlyExpenses).sort();

  const data = {
    labels: sortedMonths,
    datasets: [
      {
        label: "Monthly Expenses",
        data: sortedMonths.map((month) => monthlyExpenses[month]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Expenses ($)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Month",
        },
      },
    },
  };

  return (
    <div className="SpendingTrendsChart">
      <h2>Spending Trends</h2>
      <Line data={data} options={options} id="spending-trends-chart" />
    </div>
  );
}

export default SpendingTrendsChart;
