import React from "react";
import { Bar } from "react-chartjs-2";
import "./SecurityRiskBreakdown.scss";
const SecurityRiskBreakdown = (props) => {
  const { dataset } = props;

  return (
    <div className="riskBreakdown__dashboard">
      <h3 className="riskBreakdown__dashboard--title">
        Security Risk breakdown
      </h3>
      <div className="riskBreakdown__dashboard--chart-container">
        <Bar
          data={{
            labels: ["N/A", "Low", "Medium", "High"],
            datasets: [
              {
                data: dataset,
                backgroundColor: ["#1A9BA4", "#A3E2D6", "#F7E4C7", "#F08E8E"],
                barPercentage: 1.0,
                categoryPercentage: 1.0,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              yAxis: {
                max: Math.max(...dataset) + 10,
                ticks: {
                  stepSize: 10,
                },
              },
            },
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: true,
                text: "",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default SecurityRiskBreakdown;
