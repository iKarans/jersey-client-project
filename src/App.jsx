import React from "react";

import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";
import Network from "./components/Network/Network";
import Header from "./containers/Header/Header";

const App = () => {
  return (
    <div className="App">
      <Network />
      <Router>
        <Routes />
      </Router>
      <Header />
    </div>
  );
};
export default App;
