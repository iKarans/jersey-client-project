import React from "react";
import "./Dashboard.scss";
import LargeLineGraph from "../../components/LargeLineGraph/LargeLineGraph.jsx";
import BarChart from "../../components/BarChart/BarChart";
import { dataset } from "../../data/securityRisk";
import GoogleDriveChart from "../../components/GoogleDriveChart/GoogleDriveChart";
import GoogleDriveIcon from "../../assets/dashboard/gmail.png"


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

  const googleDriveChartTitle = "Devices on Network";
  const googleDriveChartSubtitle =
    "Provides an overview of the number of devices on the network over the past week";
  const googleDriveChartData = [60, 125, 190, 160, 100, 140, 50];
  const googleDriveChartLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const googleDriveChartMax = 300;

  return (
    <div className="dashboard">
      
      <div className="dashboard__large-line-graph">
      <LargeLineGraph
        title={largeLineGraphTitle}
        subtitle={largeLineGraphSubtitle}
        labels={largeLineGraphLabels}
        data={largeLineGraphData}
        max={largeLineGraphMax}
      />
      </div>
      <div className="dashboard__bar-chart">
      <BarChart
        dataset={dataset}
        title={"Security Risk Breakdown"}
        labels={["N/A", "Low", "Medium", "High"]}
      />
      </div>

      <GoogleDriveChart title={googleDriveChartTitle} subtitle={googleDriveChartSubtitle} data={googleDriveChartData} labels={googleDriveChartLabels} max={googleDriveChartMax} icon={GoogleDriveIcon} />
    </div>
  );
};

export default Dashboard;
