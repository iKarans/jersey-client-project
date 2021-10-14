import React from 'react'
import { Link } from 'react-router-dom';
import "./MobileNav.scss"
import { ReactComponent as SecurityIcon } from "../../../assets/nav/securityGreen.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/deviceGreen.svg";
import { ReactComponent as NetworkIcon } from "../../../assets/nav/networkGreen.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settingsGreen.svg";
import { ReactComponent as GreyDropdown } from "../../../assets/global/grey-dropdown.svg";
import { ReactComponent as HomeIcon } from "../../../assets/nav/homeGreen.svg";

const MobileNav = () => {

 
  return (
    <div className="mobileNav">
      <div  className="mobileNav__item mobileNav--dashboard">
        <HomeIcon className="mobileNav__item--image" />
        <Link to = "/dashboard"><p>Dashboard</p></Link>
      </div>
      <div  className="mobileNav__item">
        <SecurityIcon className="mobileNav__item--image" />
        <p>Security</p>
      </div>
      <div  className="mobileNav__item">
        <DevicesIcon className="mobileNav__item--image" />
        <p>Devices</p>
      </div>
      <div  className="mobileNav__item">
        <NetworkIcon className="mobileNav__item--image" />
        <p>Network</p>
      </div>
      <div  className="mobileNav__item">
        <SettingsIcon className="mobileNav__item--image" />
        <p>Settings</p>
      </div>
      <div  className="mobileNav__item--logout">
        <p className="mobileNav__logout">Logout</p>
      </div>
    </div>
  )
}

export default MobileNav
