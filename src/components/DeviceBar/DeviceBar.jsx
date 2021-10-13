import React, { useState } from "react";
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
  const [typeIcon, setTypeIcon] = useState({ laptopIcon });
  const checkType = () => {};
  // setting icon from brand

  return (
    <div className="deviceBar">
      <h4>{name}</h4>
      {/* <img {type} />
      <img {brand}/> */}
      <p>{type}</p>
      <p>{brand}</p>
      <p>{model}</p>
      <p>{OS}</p>
      <p>{ipAddress}</p>
      <p>{lastActive}</p>
      <span className="deviceBar__SecurityRisk deviceBar__SecurityRisk--high">
        <h4>{securityRisk}</h4>
      </span>
      <img src={optionsIcon}></img>
    </div>
  );
};
//type, brand,
