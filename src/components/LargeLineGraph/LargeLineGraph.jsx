import React from 'react';
import "./LargeLineGraph.scss";

import { Line } from "react-chartjs-2";

const LargeLineGraph = (props) => {
    const {title, subtitle, labels, data, min, max} = props;
    const sampleData = (canvas) => {
        const ctx=canvas.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 250);
        gradient.addColorStop(0, "rgba(42, 188, 161, 0.54")
        gradient.addColorStop(0.95, "rgba(42, 188, 161, 0");
        return {
            labels: (labels.length == data.length ? labels : [0]),
            datasets: [
                {
                  label: "Devices on Network",
                  data: labels.length == data.length ? data : [0],
                  fill: true,
                  backgroundColor: gradient,
                  borderWidth: 0,
                  pointBorderColor: "#2ABCA1",
                  pointBackgroundColor: "white", 
                  pointBorderWidth: 2, 
                },
            ]
        }
    }  
    return (
        <div className="devices-dashboard">
            <h2 className={"devices-dashboard__title"}>{title}</h2>
            <p className="devices-dashboard__subtitle">{subtitle}</p>
            <div className="devices-dashboard__chart-container">
            <Line
                data={sampleData}
                height={250}
                width={500}
                options={{
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                        display: false,
                        },
                    },
                    scales: {
                        x: {
                            beginAtZero: true,
                            grid: {
                            display: false,
                            },
                            ticks: {
                                beginAtZero: false,
                            },
                        },
                        y: {
                            beginAtZero: true,
                            min: min > Math.min(data) ? Math.min(data) : min,
                            max: max < Math.max(data) ? Math.max(data) : max,
                            grid: {
                            display: true,
                            stepSize: 50,
                            },
                            ticks: {
                                beginAtZero: true
                            }
                        },
                    }      
                }}
                />
            </div>
        </div>
    )
}

export default LargeLineGraph
