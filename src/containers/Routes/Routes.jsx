import React from "react";
import "./Routes.scss";
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
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container-settings">
            <Header pageHeading="Settings" />
            <Settings />
          </div>
        </Route>
        <Route exact path="/devices">
          <div className="routes__sidenav">
            <SideNav selectedPage="Devices" />
          </div>
          <div className="routes__container-devices">
            <Header pageHeading="Devices" />
            <Devices />
          </div>
        </Route>
        <Route exact path="/security">
          <div className="routes__sidenav">
            <SideNav selectedPage="Security" />
          </div>
          <div className="routes__container-security">
            <Header pageHeading="Security" />
            <Security />
          </div>
        </Route>
        <Route exact path="/network">
          <div className="routes__sidenav">
            <SideNav selectedPage="Network" />
          </div>
          <div className="routes__container-network">
            <Header pageHeading="Alerts" />
            <Network />
          </div>
        </Route>
        <Route path="/dashboard">
          <div className="routes__sidenav">
            <SideNav selectedPage="Dashboard" />
          </div>
          <div className="routes__container-dashboard">
            <Header pageHeading="Dashboard" />
            <Dashboard />
          </div>
        </Route>
        <Route path="/">
        <div className="routes__login">
          <Login />
        </div>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
