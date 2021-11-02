import React from "react";
import "./DeviceBar.scss";
import optionsIcon from "../../assets/devices/optionsIcon.png";
import appleIcon from "../../assets/devices/apple.svg";
import dellIcon from "../../assets/devices/dell.svg";
import huaweiIcon from "../../assets/devices/huawei.svg";
import lenovoIcon from "../../assets/devices/lenovo.svg";
import samsungIcon from "../../assets/devices/samsung.svg";
import laptopIcon from "../../assets/devices/laptop.svg";
import mobileIcon from "../../assets/devices/mobile.svg";
import { Link } from "react-router-dom";
import lujamIcon from "../../assets/devices/lujam-logo-green.svg";
import unknownManufacturer from "../../assets/devices/questionMarkIcon.svg"

export const DeviceBar = (props) => {
  const { name, deviceType, brand, manufacturer, model, opSystem, lastIP, lastSeen, securityRisk } =
    props.device;

  const typeIcon = () => {
    let typeText = "";
    deviceType === "laptop" ? (typeText = laptopIcon) : (typeText = mobileIcon);
    return typeText;
  };

  const getDate = () => {
    const lastOnline = Date.parse(lastSeen)
    const currentTime = new Date()
    const timeSinceOnline = currentTime - lastOnline
    const seconds = (timeSinceOnline / 1000).toFixed(1);
    const minutes = (timeSinceOnline / (1000 * 60)).toFixed(1);
    const hours = (timeSinceOnline / (1000 * 60 * 60)).toFixed(0);
    const days = (timeSinceOnline / (1000 * 60 * 60 * 24)).toFixed(0);
    if (seconds < 60) { return "less than 1 min ago" }
    else if (minutes < 60) { return minutes + " min ago" }
    else if (hours < 24) { return hours + " hrs ago" }
    else { return days + " days ago" }
  }



  const brandIcon = () => {
    let manufacturerToLower = manufacturer.toLowerCase();
    switch (true) {
      case manufacturerToLower.includes("dell"):
        return dellIcon
      case manufacturerToLower.includes("apple"):
        return appleIcon
      case manufacturerToLower.includes("huawei"):
        return huaweiIcon
      case manufacturerToLower.includes("lenovo"):
        return lenovoIcon
      case manufacturerToLower.includes("samsung"):
        return samsungIcon
      case manufacturerToLower.includes("lujam"):
        return lujamIcon
      default:
        return unknownManufacturer
    }
  };

  return (
    <div className="device-bar">
      <Link to={`/device/${name}`}><h4 className="device-bar__device-name">{name}</h4></Link>
      <img
        src={typeIcon()}
        alt={deviceType}
        className="device-bar__hidden-on-mobile"
      />
      <img
        src={brandIcon()}
        alt={brand}
        className="device-bar__hidden-on-mobile"
      />
      <p className="device-bar__hidden-on-mobile">{model}</p>
      <p className="device-bar__hidden-on-mobile"> {opSystem}</p>
      <p className="device-bar__hidden-on-mobile">{lastIP}</p>
      <p className="device-bar__hidden-on-mobile">{getDate()}</p>

      <span
        className={`device-bar__security-risk device-bar__security-risk--${securityRisk}`}
      >
        <h4>{securityRisk}</h4>
      </span>
      <img
        src={optionsIcon}
        alt="options"
        className="device-bar__hidden-on-mobile"
      ></img>
    </div>
  );
};
export default DeviceBar;
