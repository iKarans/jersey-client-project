import React from 'react';
import "./SideNav.scss";
import home from "./homeToDelete.svg"
import logo from "./logoToDelete.svg"

const SideNav = () => {
  return (
    <div className="sidenav">

      <div className="sidenav__logo">
        <img src={logo} alt="" />
      </div>

      <div className="sidenav__items">
        <div className="sidenav__dashboard sidenav__item">
          <img className="sidenav__item--image"src={home} alt="" />
          <p>Dashboard</p>
        </div>

        <div className="sidenav__security sidenav__item">
          <img className="sidenav__item--image"src={home} alt="" />
          <p>Security</p>
        </div>

        <div className="sidenav__devices sidenav__item">
          <img className="sidenav__item--image"src={home} alt="" />
          <p>Device</p>
        </div>

        <div className="sidenav__network sidenav__item">
          <img className="sidenav__item--image"src={home} alt="" />
          <p>Network</p>
        </div>

        <div className="sidenav__settings sidenav__item">
          <img className="sidenav__item--image"src={home} alt="" />
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
