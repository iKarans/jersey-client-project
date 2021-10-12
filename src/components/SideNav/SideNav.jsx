import React from 'react';
import "./SideNav.scss";
import home from "../../assets/nav/home.svg";
import security from "../../assets/nav/security.svg";
import device from "../../assets/nav/device.svg";
import network from "../../assets/nav/network.svg";
import settings from "../../assets/nav/settings.svg";
import logo from "../../assets/global/lujam-logo-green.svg"
import { ReactComponent as DevicesIcon } from "../../assets/nav/device.svg"


const SideNav = () => {
  return (

    <div className="sidenav">

      <div className="sidenav__logo">
        <img src={logo} alt="" />
      </div>

      <div className="sidenav__items">
        <div className="sidenav__dashboard sidenav__item">
          <img className="sidenav__item--image" src={home} alt="" />
          <p>Dashboard</p>
        </div>

        <div className="sidenav__security sidenav__item">
          <img className="sidenav__item--image" src={security} alt="" />
          <p>Security</p>
        </div>

        <div className="sidenav__devices sidenav__item">
          <DevicesIcon className="sidenav__item--image" />
          <p>Device</p>
        </div>

        <div className="sidenav__network sidenav__item">
          <img className="sidenav__item--image" src={network} alt="" />
          <p>Network</p>
        </div>

        <div className="sidenav__settings sidenav__item">
          <img className="sidenav__item--image" src={settings} alt="" />
          <p>Settings</p>
        </div>
      </div>

      <div className="sidenav__logout">
        <p>Logout</p>
      </div>
    </div>


  );
};

export default SideNav;
