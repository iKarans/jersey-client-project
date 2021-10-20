import React from "react";
import { devices } from "../../data/devices";

const DeviceInfo = (props) => {
  const { name, type, brand, model, OS, ipAddress, lastActive } = props;

  return (
    <div className="device-info">
      <h4>Device Information</h4>
      <p>
        <b>Device Type:</b>
        {type}
      </p>
      <p>
        <b>Device Name:</b>
        {name}
      </p>
      <p>
        <b>Device Brand:</b>
        {brand}
      </p>
      <p>
        <b>Device Model:</b>
        {model}
      </p>
      <p>
        <b>Operating System:</b>
        {OS}
      </p>
      <p>
        <b>IP Address:</b>
        {ipAddress}
      </p>
      <p>
        <b>Last Active:</b>
        {lastActive}
      </p>
    </div>
  );
};

export default DeviceInfo;
