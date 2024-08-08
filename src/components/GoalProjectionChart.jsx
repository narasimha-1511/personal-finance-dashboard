// In SpendingTrendsChart.js and GoalProjectionChart.js
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

function GoalProjectionChart({ goals, balance }) {
  const data = {
    labels: goals.map((goal) => goal.description),
    datasets: [
      {
        label: "Current Amount",
        data: goals.map((goal) => goal.currentAmount),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Target Amount",
        data: goals.map((goal) => goal.targetAmount),
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
      {
        label: "Projected Amount",
        data: goals.map((goal) => {
          const daysUntilTarget =
            (new Date(goal.targetDate) - new Date()) / (1000 * 60 * 60 * 24);
          const projectedAmount =
            goal.currentAmount + (balance / 30) * daysUntilTarget;
          return Math.min(projectedAmount, goal.targetAmount);
        }),
        backgroundColor: "rgba(255, 206, 86, 0.6)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="GoalProjectionChart">
      <h3>Goal Projections</h3>
      <Line data={data} options={options} id="goal-trends-chart" />
    </div>
  );
}

export default GoalProjectionChart;
