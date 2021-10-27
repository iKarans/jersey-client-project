import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.scss";
const BarChart = (props) => {
  const { title, subtitle, labels, dataset } = props;
  const suggestedMax = () => {
    const max = Math.max(...dataset);
    if (max <= 200) {
      return Math.ceil(max / 20) * 20;
    } else {
      return Math.ceil(max / 50) * 50;
    }
  };
  return (
    <div className="bar-chart">
     <div className="bar-chart__headlines">
        <h3 className="bar-chart__title">{title}</h3>
        <p className="bar-chart__subtitle">{subtitle}</p>
     </div>
      <div className="bar-chart__chart">
        <div className="bar-chart__chart-container">
          <Bar
            data={{
              labels: labels,
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
                  suggestedMax: { suggestedMax },
                  ticks: {
                    display: true,
                    stepSize: 50,
                    includeBounds: false,
                    precision: 0,
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
    </div>
  );
};

export default BarChart;
