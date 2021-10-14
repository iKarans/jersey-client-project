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

export const DeviceBar = (props) => {
  const { name, type, brand, model, OS, ipAddress, lastActive, securityRisk } =
    props.device;

  // setting icon from type
  const typeIcon = () => {
    let typeText = "";
    type === "laptop" ? (typeText = laptopIcon) : (typeText = mobileIcon);
    return typeText;
  };
  typeIcon();

  // setting icon from brand
  const brandIcon = () => {
    let brandText = "";
    if (brand === "dell") {
      brandText = dellIcon;
      return brandText;
    } else if (brand === "apple") {
      brandText = appleIcon;
      return brandText;
    } else if (brand === "huawei") {
      brandText = huaweiIcon;
      return brandText;
    } else if (brand === "lenovo") {
      brandText = lenovoIcon;
      return brandText;
    } else if (brand === "samsung") {
      brandText = samsungIcon;
      return brandText;
    }
  };

  return (
    <div className="device-bar">
      <h4>{name}</h4>
      <img
        src={typeIcon()}
        alt={type}
        className="device-bar__hidden-on-mobile"
      />
      <img
        src={brandIcon()}
        alt={brand}
        className="device-bar__hidden-on-mobile"
      />
      <p className="device-bar__hidden-on-mobile">{model}</p>
      <p className="device-bar__hidden-on-mobile"> {OS}</p>
      <p className="device-bar__hidden-on-mobile">{ipAddress}</p>
      <p className="device-bar__hidden-on-mobile">{lastActive}</p>

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
//type, brand,
