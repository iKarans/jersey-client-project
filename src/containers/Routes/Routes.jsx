import React, { useContext } from "react";
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
import ForgottenPassword from "../ForgottenPassword/ForgottenPassword";
import { UserContext } from "../../context/UserContext/UserContext";
import EditDeviceForm from "../../components/EditDeviceForm/EditDeviceForm";
import PasswordResetForm from "../../components/PasswordResetForm/PasswordResetForm";

const Routes = () => {
  const { user } = useContext(UserContext);

  const privateRoute = user ? "" : <Redirect to="/" />;

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
        <Route exact path="/devices/:device/:edit">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Devices" />
          </div>
          <div className="routes__container-settings">
            <Header pageHeading="Devices" />
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
            <DevicesIndex />
          </div>
        </Route>
        <Route exact path="/security">
          {privateRoute}
          <div className="routes__sidenav">
            <SideNav selectedPage="Security" />
          </div>
          <div className="routes__container-security">
            <Header pageHeading="Security" showAlert={true} />
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
        <Route path="/forgotten-password">
          <div className="routes__container-forgotten-password">
            <ForgottenPassword />
          </div>
        </Route>
        <Route path="/reset-password">
          <div className="routes__container-reset-password">
            <PasswordResetForm />
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
