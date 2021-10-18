import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";
import Network from "./components/Network/Network";

const App = () => {
  return (
    <div className="App">
      <Network />
      <Router>
        <Routes />
      </Router>
    </div>
  );
};
export default App;
