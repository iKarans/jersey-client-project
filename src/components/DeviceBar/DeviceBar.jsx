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
  const { device } = props;
  const { name, type, brand, model, OS, ipAddress, lastActive, securityRisk } =
    device;

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
    <div className="deviceBar">
      <h4>{name}</h4>
      <img src={typeIcon()} alt={type} className="hiddenOnMobile" />
      <img src={brandIcon()} alt={brand} className="hiddenOnMobile" />
      <p className="hiddenOnMobile">{model}</p>
      <p className="hiddenOnMobile"> {OS}</p>
      <p className="hiddenOnMobile">{ipAddress}</p>
      <p className="hiddenOnMobile">{lastActive}</p>

      <span
        className={`deviceBar__SecurityRisk deviceBar__SecurityRisk--${securityRisk}`}
      >
        <h4>{securityRisk}</h4>
      </span>
      <img src={optionsIcon} alt="options" className="hiddenOnMobile"></img>
    </div>
  );
};
//type, brand,