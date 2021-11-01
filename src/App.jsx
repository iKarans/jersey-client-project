import React from "react";


import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./containers/Routes/Routes";
import UserProvider from "./context/UserContext/UserContext";

const App = () => {
  return (
    <div className="App">   
      <Router>
        <UserProvider>
          <Routes />
        </UserProvider>
      </Router>
    </div>
    
  );
};
export default App;
