import React, { useState } from 'react';
import "./SideNav.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/global/lujam-logo-green.svg";
import MobileNav from '../MobileNav/MobileNav';
import { ReactComponent as HomeIcon } from "../../../assets/nav/home.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/nav/security.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/device.svg";
import { ReactComponent as NetworkIcon } from "../../../assets/nav/network.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settings.svg";
import { ReactComponent as GreyDropdown } from "../../../assets/global/grey-dropdown.svg";



const SideNav = () => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
    console.log(showNav)
  }

  return (

    <div className="navigation">
      {showNav && <MobileNav  handleClick={toggleNav}/>}
      <div className="sidenav">

        <div className="sidenav__logo">
          <img src={logo} alt="" />
        </div>

        <div className="sidenav__items">
          <div className="sidenav__dashboard sidenav__item">
            <HomeIcon className="sidenav__item--image" />
            <Link to="/dashboard" className="sidenav__text">Dashboard</Link>
          </div>
          <div className="sidenav__security sidenav__item">
            <SecurityIcon className="sidenav__item--image" />
            <Link to="/security" className="sidenav__text">Security</Link>
          </div>
          <div className="sidenav__devices sidenav__item">
            <DevicesIcon className="sidenav__item--image" />
            <Link to="/devices" className="sidenav__text">Devices</Link>
          </div>
          <div className="sidenav__network sidenav__item">
            <NetworkIcon className="sidenav__item--image" />
            <Link to="/network" className="sidenav__text">Network</Link>
          </div>
          <div className="sidenav__settings sidenav__item">
            <SettingsIcon className="sidenav__item--image" />
            <Link to="/settings" className="sidenav__text">Settings</Link>
          </div>
        </div>
        <div className="sidenav__logout">
          <p>Logout</p>
        </div>
      </div>
   
      <div className="mobileNavHeader" onClick={toggleNav}>
        <div className="mobileNavHeader__items-left">
          <HomeIcon className="mobileNavHeader__item--image" />
          <p className="mobileNavHeader__heading">Dashboard</p>
        </div>
        <GreyDropdown className="mobileNavHeader____image--arrow" />
      </div>
    </div>


  );
};

export default SideNav;