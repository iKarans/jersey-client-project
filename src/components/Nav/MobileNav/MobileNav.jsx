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
        <Link to = "/dashboard"><p onClick={handleClick}>Dashboard</p></Link>
      </div>
      <div  className="mobileNav__item">
        <SecurityIcon className="mobileNav__item--image" />
        <Link to = "/security" ><p onClick={handleClick}>Security</p></Link>
      </div>
      <div  className="mobileNav__item">
        <DevicesIcon className="mobileNav__item--image" />
        <Link to = "/devices"><p onClick={handleClick}>Devices</p></Link>
      </div>
      <div  className="mobileNav__item">
        <NetworkIcon className="mobileNav__item--image" />
        <Link to = "/network"><p onClick={handleClick}>Network</p></Link>
      </div>
      <div  className="mobileNav__item">
        <SettingsIcon className="mobileNav__item--image" />
        <Link to = "/settings"><p onClick={handleClick}>Settings</p></Link>
      </div>
      <div  className="mobileNav__item--logout">
        <p className="mobileNav__logout">Logout</p>
      </div>
      
    </div>
    
  )
}

export default MobileNav
