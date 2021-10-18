import React from 'react';

import SecurityRiskBreakdown from './components/SecurityRiskBreakdown/SecurityRiskBreakdown';
import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";

const App = () => {
  let breakdownData = ['100', '32', '51', '10'];
  return (
    <div className="App">
      {/* <Header pageHeading="Dashboard" />
      <DeviceList />
      <Dashboard />
      <Login /> */}
      < SecurityRiskBreakdown breakdownData = {breakdownData}/>
    </div>
  );
};
export default App;
