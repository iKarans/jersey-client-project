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

    <div className="mobilenav">
      <div  className="mobilenav__item mobilenav--dashboard">
        <HomeIcon className="mobilenav__item--image" />
        <Link to = "/dashboard" className="mobilenav__item--text " onClick={handleClick}>Dashboard</Link>
      </div>
      <div  className="mobilenav__item">
        <SecurityIcon className="mobilenav__item--image" />
        <Link to = "/security" className="mobilenav__item--text "onClick={handleClick}>Security</Link>
      </div>
      <div  className="mobilenav__item">
        <DevicesIcon className="mobilenav__item--image" />
        <Link to = "/devices" className="mobilenav__item--text " onClick={handleClick}>Devices</Link>
      </div>
      <div  className="mobilenav__item">
        <NetworkIcon className="mobilenav__item--image" />
        <Link to = "/network" className="mobilenav__item--text " onClick={handleClick}>Network</Link>
      </div>
      <div  className="mobilenav__item">
        <SettingsIcon className="mobilenav__item--image" />
        <Link to = "/settings" className="mobilenav__item--text " onClick={handleClick}>Settings</Link>
      </div>
      <div  className="mobilenav__item--logout">
        <p className="mobilenav__logout">Logout</p>
      </div>
    </div>
    
  )
}

export default MobileNav;
