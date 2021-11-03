import React from "react";
import { Link } from "react-router-dom";
import "./MobileNav.scss";
import { ReactComponent as SecurityIcon } from "../../../assets/nav/securityGreen.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/deviceGreen.svg";
import { ReactComponent as AlertIcon } from "../../../assets/nav/alertsGreen.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settingsGreen.svg";
import { ReactComponent as HomeIcon } from "../../../assets/nav/homeGreen.svg";

const MobileNav = (props) => {
  const { handleClick } = props;

  return (
    <div className="mobile-nav">
      <div className="mobile-nav__item mobile-nav--dashboard">
        <HomeIcon className="mobile-nav__item--image" />
        <Link
          to="/dashboard"
          className="mobile-nav__item--text "
          onClick={handleClick}
        >
          Dashboard
        </Link>
      </div>
      <div className="mobile-nav__item">
        <SecurityIcon className="mobile-nav__item--image" />
        <Link
          to="/security"
          className="mobile-nav__item--text "
          onClick={handleClick}
        >
          Security
        </Link>
      </div>
      <div className="mobile-nav__item">
        <DevicesIcon className="mobile-nav__item--image" />
        <Link
          to="/devices"
          className="mobile-nav__item--text "
          onClick={handleClick}
        >
          Devices
        </Link>
      </div>
      <div className="mobile-nav__item">
        <AlertIcon className="mobile-nav__item--image" />
        <Link
          to="/alerts"
          className="mobile-nav__item--text "
          onClick={handleClick}
        >
          Alerts
        </Link>
      </div>
      <div className="mobile-nav__item">
        <SettingsIcon className="mobile-nav__item--image" />
        <Link
          to="/settings"
          className="mobile-nav__item--text "
          onClick={handleClick}
        >
          Settings
        </Link>
      </div>
      <div className="mobile-nav__item--logout">
        <p className="mobile-nav__logout">Logout</p>
      </div>
    </div>
  );
};

export default MobileNav;
