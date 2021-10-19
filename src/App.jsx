import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";
import SecurityRiskBreakdown from "./components/SecurityRiskBreakdown/SecurityRiskBreakdown";
import { dataset } from "./data/securityRisk";
import Dashboard from "./containers/Dashboard/Dashboard";
const App = () => {
  return (
    <div className="App">
      <Dashboard />
      {/* <Router>
        <Routes />
      </Router> */}
    </div>
  );
};
export default App;
