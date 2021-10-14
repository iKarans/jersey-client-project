import React from 'react'
import { Link } from 'react-router-dom';
import "./MobileNav.scss"
import { ReactComponent as SecurityIcon } from "../../../assets/nav/securityGreen.svg";
import { ReactComponent as DevicesIcon } from "../../../assets/nav/deviceGreen.svg";
import { ReactComponent as NetworkIcon } from "../../../assets/nav/networkGreen.svg";
import { ReactComponent as SettingsIcon } from "../../../assets/nav/settingsGreen.svg";
import { ReactComponent as GreyDropdown } from "../../../assets/global/grey-dropdown.svg";
import { ReactComponent as HomeIcon } from "../../../assets/nav/homeGreen.svg";

const MobileNav = (props) => {

  const {handleClick} = props
 
  return (
    <div className="mobileNav">
      <div  className="mobileNav__item mobileNav--dashboard">
        <HomeIcon className="mobileNav__item--image" />
        <Link to = "/dashboard" className="mobileNav__item--text " onClick={handleClick}>Dashboard</Link>
      </div>
      <div  className="mobileNav__item">
        <SecurityIcon className="mobileNav__item--image" />
        <Link to = "/security" className="mobileNav__item--text "onClick={handleClick}>Security</Link>
      </div>
      <div  className="mobileNav__item">
        <DevicesIcon className="mobileNav__item--image" />
        <Link to = "/devices" className="mobileNav__item--text " onClick={handleClick}>Device</Link>
      </div>
      <div  className="mobileNav__item">
        <NetworkIcon className="mobileNav__item--image" />
        <Link to = "/network" className="mobileNav__item--text " onClick={handleClick}>Network</Link>
      </div>
      <div  className="mobileNav__item">
        <SettingsIcon className="mobileNav__item--image" />
        <Link to = "/settings" className="mobileNav__item--text " onClick={handleClick}>Setting</Link>
      </div>
      <div  className="mobileNav__item--logout">
        <p className="mobileNav__logout">Logout</p>
      </div>

      
    </div>
    
  )
}

export default MobileNav
