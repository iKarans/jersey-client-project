import React from "react";
import "./UserBar.scss";
import NetworkID from "./NetworkID/NetworkID";
import UserInfo from "./UserInfo/UserInfo";
import mobileLogo from "../../assets/global/lujam-logo-mobile.svg";

const UserBar = (props) => {
  const {userName}=props
  return (
    <div className="user-bar">
      <img className="user-bar__img" src={mobileLogo} alt="Lujam logo" />
      <div className="user-bar__devices">
        <NetworkID />
      </div>
      <div className="user-bar__user">
        <UserInfo userName={userName}/>
      </div>
    </div>
  );
};

export default UserBar;
