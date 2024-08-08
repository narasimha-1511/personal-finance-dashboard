import React, { useState } from "react";
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

function ReportGenerator({ transactions }) {
  const [reportType, setReportType] = useState("monthly");
  const [year, setYear] = useState(new Date().getFullYear());

  const generateReportData = () => {
    const reportData = {};
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const key =
        reportType === "monthly"
          ? `${date.getFullYear()}-${date.getMonth() + 1}`
          : date.getFullYear().toString();

      if (date.getFullYear() === year) {
        reportData[key] = (reportData[key] || 0) + transaction.amount;
      }
    });

    return reportData;
  };

  const reportData = generateReportData();
  const labels = Object.keys(reportData).sort();
  const data = {
    labels,
    datasets: [
      {
        label: `${
          reportType.charAt(0).toUpperCase() + reportType.slice(1)
        } Balance`,
        data: labels.map((label) => reportData[label]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: `${
          reportType.charAt(0).toUpperCase() + reportType.slice(1)
        } Financial Report for ${year}`,
      },
    },
  };

  return (
    <div className="ReportGenerator">
      <h2>Financial Report Generator</h2>
      <div>
        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
        <input
          type="number"
          value={year}
          onChange={(e) => setYear(parseInt(e.target.value))}
          min="2000"
          max="2100"
        />
      </div>
      <Line data={data} options={options} id="report-chart" />
      <button
        onClick={() => {
          const reportText = labels
            .map((label) => `${label}: ${reportData[label].toFixed(2)}`)
            .join("\n");
          const blob = new Blob([reportText], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.href = url;
          a.download = `financial_report_${year}.txt`;
          a.click();
        }}
      >
        Download Report
      </button>
    </div>
  );
}

export default ReportGenerator;
