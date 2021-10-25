import React from "react";

import Security from "./containers/Security/Security";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";

const App = () => {
  return (
    <div className="App">
      <Security />
      
      <Router>
        <Routes />
      </Router>
    </div>
    
  );
};
export default App;
