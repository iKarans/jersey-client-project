import React from 'react';
import { Doughnut } from "react-chartjs-2";
import "../../assets/styles/variables.scss"
import "./SecurityScoreChart.scss";

const SecurityScoreChart = (props) => {
    const {userScore} = props;
    let chartColors;
    switch(true) {
        case userScore <= 199:
            chartColors = ["#F04A68", "#F2F2F2", "#F2F2F2", "#F2F2F2","#F2F2F2","#FFFFFF"];
            break;
        case userScore <= 399:
            chartColors = ["#F04A68", "#F0B78E", "#F2F2F2", "#F2F2F2","#F2F2F2","#FFFFFF"];
            break;
        case userScore <= 599:
            chartColors = ["#F04A68", "#F0B78E", "#FFF9C0", "#F2F2F2","#F2F2F2","#FFFFFF"];
            break;
        case userScore <= 799:
            chartColors = ["#F04A68", "#F0B78E", "#FFF9C0", "#2ABCA1","#F2F2F2","#FFFFFF"];
            break;
        case userScore <= 999:
            chartColors = ["#F04A68", "#F0B78E", "#FFF9C0", "#2ABCA1","#20837F","#FFFFFF"];
            break;
        default:
            chartColors = [$security-none, "#F2F2F2", "#F2F2F2", "#F2F2F2","#F2F2F2","#FFFFFF"]
        console.log(chartColors);
    }
    return (
            <Doughnut 
             data={{
                datasets: [
                  {
                    data: [100, 100, 100, 100, 100, 200],
                    backgroundColor: chartColors,
                    rotation: (360 / 7) * 4.5,
                    spacing: 15,
                    cutout: "75%",
                    borderWidth: 0,
                  },
                ],
              }}
            options={{
                hover: false,
                plugins: {
                    tooltip: { 
                        enabled: false 
                    },
                    legend: {
                        display: false,
                     },
                }
            }}
            />
    )
}

export default SecurityScoreChart
