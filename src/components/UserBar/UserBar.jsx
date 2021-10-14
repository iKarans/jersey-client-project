import React from "react";
import "./UserBar.scss";
import NetworkID from "./NetworkID/NetworkID";
import UserInfo from "./UserInfo/UserInfo";
import wavesSVG from "../../assets/header/background-waves.svg";
import mobileLogo from "../../assets/global/lujam-logo-mobile.svg";

const UserBar = () => {
  return (
    <div className="user-bar">
      <img className="user-bar__img" src={mobileLogo} alt="Lujam logo" />
      <div className="user-bar__devices">
        <NetworkID />
      </div>
      <div className="user-bar__user">
        <UserInfo />
      </div>
    </div>
  );
};

export default UserBar;
