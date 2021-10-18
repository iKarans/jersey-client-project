import React from "react";

import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
import Dashboard from "./containers/Dashboard/Dashboard";
import Login from "./containers/Login/Login";
import Network from "./components/Network/Network";

const App = () => {
  return (
    <div className="App">
      <Network />
    </div>
  );
};
export default App;
