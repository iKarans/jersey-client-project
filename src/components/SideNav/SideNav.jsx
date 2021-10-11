import React from 'react';
import "./SideNav.scss";

const SideNav = () => {
  return (
    <div className="sidenav">

      <div className="sidenav__logo">
        
      </div>

      <div className="sidenav__menu--items">
        <div className="sidenav__dashboard">
          <p>Dashboard</p>
        </div>

        <div className="sidenav__security">
          <p>Security</p>
        </div>

        <div className="sidenav__devices">
          <p>Device</p>
        </div>

        <div className="sidenav__network">
          <p>Network</p>
        </div>

        <div className="sidenav__settings">
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
