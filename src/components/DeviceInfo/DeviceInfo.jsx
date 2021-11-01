import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./DeviceInfo.scss"

const DeviceInfo = (props) => {
  const { name, deviceType, manufacturer, model, opSystem, lastIP, lastSeen } = props;

  return (
    <div className="device-info">

      <div className="device-info__list">
        <h3>Device Information</h3>

        <ul className="device-info__list--ul">
          <li className="device-info__list-item"><b>Device Type:</b> {deviceType}</li>
          <li className="device-info__list-item"><b>Device Name:</b> {name}</li>
          <li className="device-info__list-item"><b>Brand:</b> {manufacturer}</li>
          <li className="device-info__list-item"><b>Model:</b> {model}</li>
          <li className="device-info__list-item"><b>Operating System:</b> {opSystem}</li>
          <li className="device-info__list-item"><b>IP Address:</b> {lastIP}</li>
          <li className="device-info__list-item"><b>Last Active:</b> {lastSeen}</li>
        </ul>
      </div>

      <div className="device-info__edit">
        <h4>Are these details correct?</h4>
        <Link to={`/settings/editdevice/${name}`} >
          <Button text="Edit" buttonRisk={true} />
        </Link>
      </div>

    </div>
  );
};

export default DeviceInfo;
