import React from "react";
import Button from "../Button/Button";
import "./DeviceRisk.scss";

const DeviceRisk = (props) => {
  const { securityRisk } = props;
  let safeClass = "device-risk-alert";
  let riskClass = "device-risky";

  if (securityRisk == "high") {
    return (
      <div className={riskClass}>
        <h4 className="device-risk-alert__title">Risk:</h4>
        <p className="device-risk-alert__body">{securityRisk}</p>
        <Button text="Block Device" />
      </div>
    );
  } else {
    return (
      <div className={safeClass}>
        <h4 className="device-risk-alert__title">Risk:</h4>
        <p className="device-risk-alert__body">{securityRisk}</p>
        <Button text="Block Device" />
      </div>
    );
  }

  //if securityrisk=="high" -> return button + classname ...
};

export default DeviceRisk;
