import React from "react";
import "./Dashboard.scss";
import LargeLineGraph from "../../components/LargeLineGraph/LargeLineGraph.jsx";
import BarChart from "../../components/BarChart/BarChart";
import { dataset } from "../../data/securityRisk";
import GoogleDriveChart from "../../components/GoogleDriveChart/GoogleDriveChart";
import GoogleDriveIcon from "../../assets/dashboard/gmail1.png";
import DropboxChart from "../../components/DropboxChart/DropboxChart";
import DropboxIcon from "../../assets/dashboard/dropbox.png"

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
  const largeLineGraphHoverLabel = "Devices on Network";

  const googleDriveChartTitle = "Google Drive";
  const googleDriveChartSubtitle =
    "Number of devices that used Google Drive over the past week";
  const googleDriveChartData = [6, 4, 12, 6, 2, 2, 0];
  const googleDriveChartLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const googleDriveChartMax = 14;
  const googleDriveChartHoverLabel = "Google Drive users";

  const dropboxChartTitle = "Dropbox Usage";
  const dropboxChartSubtitle =
    "Number of devices that used Dropbox over the past week";
  const dropboxChartData = [100 , 200, 250, 200 , 150 , 0      , 0];
  const dropboxChartLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dropboxChartMax = 300;
  const dropboxChartHoverLabel = "Dropbox usage";

  return (
    <div className="dashboard">
      <div className="dashboard__large-line-graph">
        <LargeLineGraph
          title={largeLineGraphTitle}
          subtitle={largeLineGraphSubtitle}
          labels={largeLineGraphLabels}
          data={largeLineGraphData}
          max={largeLineGraphMax}
          hoverLabel={largeLineGraphHoverLabel}
        />
      </div>
      <div className="dashboard__bar-chart">
        <BarChart
          dataset={dataset}
          title={"Security Risk Breakdown"}
          labels={["N/A", "Low", "Medium", "High"]}
        />
      </div>

      <GoogleDriveChart
        title={googleDriveChartTitle}
        subtitle={googleDriveChartSubtitle}
        data={googleDriveChartData}
        labels={googleDriveChartLabels}
        max={googleDriveChartMax}
        icon={GoogleDriveIcon}
        hoverLabel={googleDriveChartHoverLabel}
      />

      <DropboxChart 
        title={dropboxChartTitle}
        subtitle={dropboxChartSubtitle}
        data={dropboxChartData}
        labels={dropboxChartLabels}
        max={dropboxChartMax}
        icon={DropboxIcon}
        hoverLabel={dropboxChartHoverLabel}/>
    </div>
  );
};

export default Dashboard;
