import React from "react";
import "./LargeLineGraph.scss";

import { Line } from "react-chartjs-2";

const LargeLineGraph = (props) => {
  const { title, subtitle, labels, data, max, icon } = props;
  const generateGraphSettings = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgba(42, 188, 161, 0.54");
    gradient.addColorStop(0.95, "rgba(42, 188, 161, 0");
    return {
      labels: labels.length === data.length ? labels : ["Monday"],
      datasets: [
        {
          label: "Devices on Network",
          data: labels.length === data.length ? data : [0],
          fill: true,
          backgroundColor: gradient,
          borderWidth: 0,
          pointBorderColor: "#2ABCA1",
          pointBackgroundColor: "white",
          pointBorderWidth: 2,
        },
      ],
    };
  };
  return (
    <div className="network-devices">
        <img src={icon} alt="" className="network-devices__icon" />
      <h2 className="network-devices__title">{title}</h2>
      <p className="network-devices__subtitle">{subtitle}</p>
      <div className="network-devices__chart-container">
        <Line
          data={generateGraphSettings}
          height={250}
          width={520}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              xAxis: {
                ticks: {
                  beginAtZero: false,
                  padding: 5,
                  font: {
                    size: 9,
                  },
                },
                grid: {
                  display: false,
                },
              },
              yAxis: {
                max: max < Math.max(...data) ? Math.max(...data) + 10 : max,
                beginAtZero: true,
                ticks: {
                  padding: 10,
                  font: {
                    size: 9,
                  },
                },
                grid: {
                  display: true,
                  stepSize: 50,
                  drawTicks: false,
                },
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LargeLineGraph;
