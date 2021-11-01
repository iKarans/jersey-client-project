import React, { useContext, useState } from "react";
import "./Routes.scss";
import Alerts from "../Alerts/Alerts";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Devices from "../Devices/Devices";
import Security from "../Security/Security";
import SideNav from "../../components/Nav/SideNav/SideNav";
import Settings from "../../containers/Settings/Settings";
import Header from "../Header/Header";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import DevicesIndex from "../DevicesIndex/DevicesIndex";
import { UserContext } from "../../context/UserContext/UserContext";
import EditDeviceForm from '../../components/EditDeviceForm/EditDeviceForm'


const Routes = () => {
  const { user } = useContext(UserContext);

  const privateRoute = user ? "" : <Redirect to="/" />;

  const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = (event) => {
    console.log(event)
  }

  return (
    <div className="routes">
      <Switch>
        <Route exact path="/settings">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Settings" />
          </div>
          <div className="routes__container-settings">
            <Header pageHeading="Settings" />
            <Settings />
          </div>
        </Route>
        <Route exact path="/devices/:device/edit">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Devices" />
          </div>
          <div className="routes__container-settings">
            <Header pageHeading="Devices" showEdit={showEdit} />
            <EditDeviceForm />
          </div>
        </Route>
        <Route exact path="/devices">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Devices" />
          </div>
          <div className="routes__container-devices">
            <Header pageHeading="Devices" />
            <Devices />
          </div>
        </Route>
        <Route exact path="/device/:device">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Devices" />
          </div>
          <div className="routes__container-devices">
            <Header pageHeading="Devices" />
            <DevicesIndex handleShowEdit={handleShowEdit} />
          </div>
        </Route>
        <Route exact path="/security">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Security" />
          </div>
          <div className="routes__container-security">
            <Header pageHeading="Security" />
            <Security />
          </div>
        </Route>
        <Route exact path="/alerts">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Alerts" />
          </div>
          <div className="routes__container-alerts">
            <Header pageHeading="Alerts" />
            <Alerts />
          </div>
        </Route>
        <Route path="/dashboard">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Dashboard" />
          </div>
          <div className="routes__container-dashboard">
            <Header pageHeading="Dashboard" />
            <Dashboard />
          </div>
        </Route>
        <Route exact path="/signup">
          <div className="routes__container-signup">
            <SignUp />
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
