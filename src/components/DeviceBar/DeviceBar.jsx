import React from "react";

export const DeviceBar = (props) => {
  const { device } = props;
  const { name, model, OS, ipAddress, lastActive, securityRisk } = device;
  return (
    <div className="deviceBar">
      <h4>{name}</h4>
      {/* <img {type} />
      <img {brand}/> */}
      <p>{model}</p>
      <p>{OS}</p>
      <p>{ipAddress}</p>
      <p>{lastActive}</p>
      <span className="deviceBar__SecurityRisk">
        <p>{securityRisk}</p>
      </span>
    </div>
  );
};
//type, brand,
