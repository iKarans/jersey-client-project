import React from "react";
<<<<<<< HEAD
import "./Routes.scss";
=======
>>>>>>> 10ab97369addb10fd6339deb3d6121e78d692401
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
<<<<<<< HEAD
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container">
            <Header pageHeading="Settings" />
            <Settings />
          </div>
        </Route>
        <Route exact path="/devices">
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container">
            <Header pageHeading="Devices" />
            <Devices />
          </div>
        </Route>
        <Route exact path="/security">
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container">
            <Header pageHeading="Security" />
            <Security />
          </div>
        </Route>
        <Route exact path="/network">
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container">
            <Header pageHeading="Network" />
            <Network />
          </div>
        </Route>
        <Route path="/dashboard">
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container">
            <Header pageHeading="Dashboard" />
            <Dashboard />
          </div>
=======
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
>>>>>>> 10ab97369addb10fd6339deb3d6121e78d692401
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
