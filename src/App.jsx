import React from "react";

import SecurityRiskBreakdown from "./components/SecurityRiskBreakdown/SecurityRiskBreakdown";
import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";
import { data } from "./data/securityRisk";
const App = () => {
  return (
    <div className="App">
      {/* <Header pageHeading="Dashboard" />
      <DeviceList />
      <Dashboard />
      <Login /> */}
      <SecurityRiskBreakdown data={data} />
    </div>
  );
};
export default App;
