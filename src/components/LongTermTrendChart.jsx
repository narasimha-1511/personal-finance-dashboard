import React, { useMemo } from "react";
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

function LongTermTrendChart({ transactions }) {
  const data = useMemo(() => {
    const monthlyData = transactions.reduce((acc, transaction) => {
      const date = new Date(transaction.date);
      const monthYear = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, "0")}`;
      if (!acc[monthYear]) {
        acc[monthYear] = { income: 0, expenses: 0 };
      }
      if (transaction.amount > 0) {
        acc[monthYear].income += transaction.amount;
      } else {
        acc[monthYear].expenses += Math.abs(transaction.amount);
      }
      return acc;
    }, {});

    const sortedMonths = Object.keys(monthlyData).sort();

    return {
      labels: sortedMonths,
      datasets: [
        {
          label: "Income",
          data: sortedMonths.map((month) => monthlyData[month].income),
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
        {
          label: "Expenses",
          data: sortedMonths.map((month) => monthlyData[month].expenses),
          borderColor: "rgb(255, 99, 132)",
          tension: 0.1,
        },
      ],
    };
  }, [transactions]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Long-term Income vs Expenses Trend",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Amount ($)",
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
    <div className="LongTermTrendChart">
      <Line data={data} options={options} id="long-term-trend-chart" />
    </div>
  );
}

export default LongTermTrendChart;
