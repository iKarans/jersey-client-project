import React from "react";
import "./Dashboard.scss";
import LargeLineGraph from "../../components/LargeLineGraph/LargeLineGraph.jsx";
import BarChart from "../../components/BarChart/BarChart";
import { dataset } from "../../data/securityRisk";

const Dashboard = () => {
  const largeLineGraphTitle = "Devices on Network";
  const largeLineGraphSubtitle =
    "Provides an overview of the number of devices on the network over the past week";
  const largeLineGraphData = [60, 125, 190, 160, 100, 140, 50];
  const largeLineGraphLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const largeLineGraphMax = 300;
  return (
    <div className="dashboard">
      <div className="dashboard__content">
        <LargeLineGraph
          title={largeLineGraphTitle}
          subtitle={largeLineGraphSubtitle}
          labels={largeLineGraphLabels}
          data={largeLineGraphData}
          max={largeLineGraphMax}
        />
        <BarChart
          dataset={dataset}
          title={"Security Risk Breakdown"}
          labels={["N/A", "Low", "Medium", "High"]}
        />
        <div className="placeholder"></div>
        <div className="placeholder"></div>
      </div>
    </div>
  );
};

export default Dashboard;
