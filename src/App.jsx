import React from 'react';

import "./App.css";
import DeviceList from "./containers/DeviceList/DeviceList";
import Header from "./containers/Header/Header";
const App = () => {
  return (
    <div className="App">
      <Header pageHeading="Dashboard" />
      <DeviceList />
    </div>
  );
};
export default App;
