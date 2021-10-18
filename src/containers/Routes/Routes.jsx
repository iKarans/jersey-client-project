import React from "react";
import Network from "../Network/Network";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Devices from "../Devices/Devices";
import Security from "../Security/Security";
import SideNav from "../../components/Nav/SideNav/SideNav";
import Settings from "../../containers/Settings/Settings";
import Header from "../Header/Header";
import Login from "../Login/Login";

const Routes = () => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/settings">
          <Header pageHeading="Settings" />
          <SideNav selectedPage="Settings" />
          <Settings />
        </Route>
        <Route exact path="/devices">
          <Header pageHeading="Devices" />
          <SideNav selectedPage="Devices" />
          <Devices />
        </Route>
        <Route exact path="/security">
          <Header pageHeading="Security" />
          <SideNav selectedPage="Security" />
          <Security />
        </Route>
        <Route exact path="/network">
          <Header pageHeading="Network" />
          <SideNav selectedPage="Network" />
          <Network />
        </Route>
        <Route path="/dashboard">
          <Header pageHeading="Dashboard" />
          <SideNav selectedPage="Dashboard" />
          <Dashboard />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
