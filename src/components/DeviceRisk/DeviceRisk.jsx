import React from "react";
import Button from "../Button/Button";
import "./DeviceRisk.scss";

const DeviceRisk = (props) => {
  const { toggleModal, securityRisk } = props;

  if (securityRisk == "high") {
    return (
      <div className="device-risk-alert">
        <h4 className="device-risk-alert__title">
          This device poses a significant risk to the network.
        </h4>
        <p className="device-risk-alert__body">
          This is likely due to a number of reasons including a device being
          old, not having anti-virus software installed or is using an outdated
          operating system.{" "}
        </p>
        <Button toggleModal={toggleModal} text="Block Device" buttonRisk={false} />
      </div>
    );
  } else {
    return (
      <div className="device-risk-alert">
        <h4 className="device-risk-alert__title">
          Low Risk Device. No Further Action Required.{" "}
        </h4>
        <p className="device-risk-alert__body">
          You can rest easy knowing this device poses a zero to low risk of
          attack on the network. This is likely due to the device using an
          up-to-date operating system or that it has anti-virus and malware
          installed.
        </p>
      </div>
    );
  }
};

export default DeviceRisk;
