import React from 'react';
import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="sidenav">

      <div className="sidenav__logo">
        
      </div>

      <div className="sidenav__dashboard">
        <p href="#section">Dashboard</p>
      </div>

      <div className="sidenav__security">
        <p href="#section">Security</p>
      </div>

      <div className="sidenav__devices">
        <p href="#section">Device</p>
      </div>

      <div className="sidenav__network">
        <p href="#section">Network</p>
      </div>

      <div className="sidenav__settings">
        <p href="#section">Settings</p>
      </div>

    </div>
  );
};

export default SideNav;
