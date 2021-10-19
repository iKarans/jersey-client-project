import React from "react";
import Button from "../Button/Button";
import "./DeviceRisk.scss"

const DeviceRisk = (props) => {
  const { title, message } = props;

  //if device safe -> return
  //if device medium ->
  return (
    <div className="device-risk-alert">
      <h4 className="device-risk-alert__title">{title}</h4>
      <p className="device-risk-alert__body">{message}</p>
      <Button text="Block Device"/>
    </div>
  );
};

export default DeviceRisk;
