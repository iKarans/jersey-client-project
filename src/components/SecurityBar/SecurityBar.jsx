import React from "react";
import "./SecurityBar.scss";
import AlertButton from "./AlertButton/AlertButton";
import NetworkAlert from "./NetworkAlert/NetworkAlert";

import deviceIcon from "../../assets/header/device-icon.svg";
import alertIcon from "../../assets/header/alert-icon.svg";
import highRiskWhite from "../../assets/header/high-risk-white.svg";
import greenTick from "../../assets/login/green-tick.svg";

const SecurityBar = (props) => {
  const { pageHeading, device, showAlert = false} = props;
  return (
    <div className="security-bar">
      <div>
        <h1 className="security-bar__heading">{pageHeading}</h1>
      </div>

      <h4 className="security-bar__device-id"> &lt; {device}</h4>

      {showAlert && (
      <NetworkAlert
        alertImg={greenTick}
        alertText="Your network is secure. Great work!"
        atRisk={false}
        device={device}
      />)}
      <div className="security-bar__buttons">
        <AlertButton
          buttonText="Active Devices"
          buttonNumber="36"
          isHigh={false}
          iconImage={deviceIcon}
        />
        <AlertButton
          buttonText="Alerts"
          isHigh={false}
          iconImage={alertIcon}
          buttonNumber="63"
        />
        <AlertButton
          buttonText="High Risk Devices"
          isHigh={true}
          iconImage={highRiskWhite}
          buttonNumber="4"
        />
      </div>
    </div>
  );
};

export default SecurityBar;
