import React from "react";
import "./UserBar.scss";
import DeviceID from "./DeviceID/DeviceID";
import UserInfo from "./UserInfo/UserInfo";
import "../../assets/header/background-waves.svg";

const UserBar = () => {
  return (
    <div class="user-bar">
      <div>
        <DeviceID />
      </div>
      <div>
        <UserInfo />
      </div>
    </div>
  );
};

export default UserBar;
