import React, { useState, useContext } from "react";
import "./SideNav.scss";
import { Link } from "react-router-dom";
import logo from "../../../assets/global/lujam-logo-green.svg";
import MobileNav from "../MobileNav/MobileNav";
import { ReactComponent as HomeIcon } from "../../../assets/nav/home.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/nav/security.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/device.svg";
import { ReactComponent as AlertIcon } from "../../../assets/nav/alerts.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settings.svg";
import { ReactComponent as GreyDropdown } from "../../../assets/global/grey-dropdown.svg";
import { UserContext } from "../../../containers/Context/UserContext/UserContext";

const SideNav = (props) => {
  const { selectedPage } = props;
  const { handleLogout } = useContext(UserContext);

  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="navigation">
      {showNav && <MobileNav handleClick={toggleNav} />}
      <div className="side-nav">
        <div className="side-nav__logo">
          <img src={logo} alt="" />
        </div>

        <div className="side-nav__items">
          <div className="side-nav__dashboard side-nav__item">
            <HomeIcon className="side-nav__item--image" />
            <Link to="/dashboard" className="side-nav__text">
              Dashboard
            </Link>
          </div>
          <div className="side-nav__security side-nav__item">
            <SecurityIcon className="side-nav__item--image" />
            <Link to="/security" className="side-nav__text">
              Security{" "}
            </Link>
          </div>
          <div className="side-nav__devices side-nav__item">
            <DevicesIcon className="side-nav__item--image" />
            <Link to="/devices" className="side-nav__text">
              Devices
            </Link>
          </div>
          <div className="side-nav__alerts side-nav__item">
            <AlertIcon className="side-nav__item--image" />
            <Link to="/alerts" className="side-nav__text">
              Alerts
            </Link>
          </div>
          <div className="side-nav__settings side-nav__item">
            <SettingsIcon className="side-nav__item--image" />
            <Link to="/settings" className="side-nav__text">
              Settings
            </Link>
          </div>
        </div>
        <div className="side-nav__logout">
          <span onClick={handleLogout}>Logout</span>
        </div>
      </div>

      <div className="mobile-nav-header" onClick={toggleNav}>
        <div className="mobile-nav-header__items-left">
          <HomeIcon className="mobile-nav-header__item--image" />
          <p className="mobile-nav-header__heading">{selectedPage}</p>
        </div>
        <GreyDropdown className="mobile-nav-header____image--arrow" />
      </div>
    </div>
  );
};

export default SideNav;
