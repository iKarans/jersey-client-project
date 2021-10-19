import React from "react";
import "./Dashboard.scss";
import LargeLineGraph from "../../components/LargeLineGraph/LargeLineGraph.jsx";
import SecurityRiskBreakdown from "../../components/SecurityRiskBreakdown/SecurityRiskBreakdown";

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
      <LargeLineGraph
        title={largeLineGraphTitle}
        subtitle={largeLineGraphSubtitle}
        labels={largeLineGraphLabels}
        data={largeLineGraphData}
        max={largeLineGraphMax}
      />
      <SecurityRiskBreakdown dataset={dataset} />
    </div>
  );
};

export default Dashboard;
