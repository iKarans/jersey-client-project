import React from "react";
import "./SecurityBar.scss";
import AlertButton from "./AlertButton/AlertButton";
import NetworkAlert from "./NetworkAlert/NetworkAlert";

import deviceIcon from "../../assets/header/device-icon.svg";
import alertIcon from "../../assets/header/alert-icon.svg";
import highRiskWhite from "../../assets/header/high-risk-white.svg";
import greenTick from "../../assets/login/green-tick.svg";


const SecurityBar = () => {
  return (
    <div className="security-bar">
      <div>
        <h1 className="security-bar__heading">Dashboard</h1>
      </div>
      <NetworkAlert
        alertImg={greenTick}
        alertText="Your network is secure. Great work!"
        atRisk={false}
      />
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