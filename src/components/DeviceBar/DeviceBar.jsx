import React from "react";
import "./DeviceBar.scss";
import optionsIcon from "../../assets/devices/optionsIcon.png";
export const DeviceBar = (props) => {
  const { device } = props;
  const { name, type, brand, model, OS, ipAddress, lastActive, securityRisk } =
    device;
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
