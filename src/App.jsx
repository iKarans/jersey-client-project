import React from 'react';

import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard"

const App = () => {
  return (
    <div className="App">
      <Header pageHeading="Dashboard" />
      <DeviceList />
      <Dashboard />
    </div>
  );
};
export default App;
