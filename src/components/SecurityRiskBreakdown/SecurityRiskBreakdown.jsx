import React from "react";
import { Bar } from "react-chartjs-2";
import "./SecurityRiskBreakdown.scss";
const SecurityRiskBreakdown = (props) => {
  const { data } = props;
  return (
    <div className="riskBreakdown__dashboard">
      <h2 className="riskBreakdown__dashboard--title">
        Security Risk breakdown
      </h2>
      <div className="riskBreakdown__dashboard--chart-container">
        <Bar
          data={data}
          height={400}
          width={600}
          options={{
            scales: {
              x: {
                grid: {
                  display: false,
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
