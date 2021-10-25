import React from "react";
import Button from "../Button/Button";
import "./DeviceInfo.scss"

const DeviceInfo = (props) => {
  const { name, type, brand, model, OS, ipAddress, lastActive } = props;

  return (
    <div className="device-info">

        <div className="device-info__list">
            <h3>Device Information</h3>

            <ul className="device-info__list--ul">
                <li className="device-info__list-item"><b>Device Type:</b> {type}</li>
                <li className="device-info__list-item"><b>Device Name:</b> {name}</li>
                <li className="device-info__list-item"><b>Brand:</b> {brand}</li>
                <li className="device-info__list-item"><b>Model:</b> {model}</li>
                <li className="device-info__list-item"><b>Operating System:</b> {OS}</li>
                <li className="device-info__list-item"><b>IP Address:</b> {ipAddress}</li>
                <li className="device-info__list-item"><b>Last Active:</b> {lastActive}</li>
            </ul>               
        </div>

        <div className="device-info__edit">
            <h4>Are these details correct?</h4>
            <Button text="Edit" buttonRisk={true}/>
        </div>
      
    </div>
  );
};

export default DeviceInfo;
