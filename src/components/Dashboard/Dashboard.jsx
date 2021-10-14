import React from 'react';
import "./Dashboard.scss";
import LargeLineGraph from "../LargeLineGraph/LargeLineGraph.jsx";

const Dashboard = () => {
    const largeLineGraphTitle = "Devices on Network";
    const largeLineGraphSubtitle = "Provides an overview of the number of devices on the network over the past week";
    const largeLineGraphData = [69, 125, 190, 160, 100, 140, 50, 30];
    const largeLineGraphLabels = ["" ,"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const largeLineGraphMin = 0;
    const largeLineGraphMax = 300;
    return (
        <div>
            <LargeLineGraph title={largeLineGraphTitle} subtitle={largeLineGraphSubtitle} labels={largeLineGraphLabels} data={largeLineGraphData} min={largeLineGraphMin} max={largeLineGraphMax}/>
        </div>
    )
}

export default Dashboard
