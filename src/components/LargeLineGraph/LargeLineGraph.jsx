import React from "react";
import "./LargeLineGraph.scss";

import { Line } from "react-chartjs-2";

const LargeLineGraph = (props) => {
  const { title, subtitle, labels, data, max, icon, hoverLabel } = props;
  const generateGraphSettings = (canvas) => {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, "rgba(42, 188, 161, 0.54");
    gradient.addColorStop(0.95, "rgba(42, 188, 161, 0");
    return {
      labels: labels.length === data.length ? labels : ["Monday"],
      datasets: [
        {
          label: hoverLabel,
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
    <div className="line-graph">
          {icon && <img src={icon} alt="" className="line-graph__icon" />}
      <div className ="line-graph__header">
        <h2 className="line-graph__header--title">{title}</h2>
        <p className="line-graph__header--subtitle">{subtitle}</p>
        </div>    
      <div className="line-graph__chart">

      
      <div className="line-graph__chart-container">
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
    </div>
  );
};

export default LargeLineGraph;
