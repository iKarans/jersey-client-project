import React from "react";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";
import { UserContext } from "../Context/UserContext/UserContext";


const UserInfo = (props) => {
  const {userName} = props;
  return (
    <div className="user-info">
      <div className="user-info__img"></div>
      <div className="user-info__dropdown">
        <button className="user-info__name">
          {userName}
          <img
            className="user-info__dropdown-arrow"
            src={whiteDropdown}
            alt="White Dropdown Arrow"
          ></img>
        </button>
        <p className="user-info__title">Admin</p>
        <div className="user-info__dropdown-content">
          <p className="user-info__dropdown-content--link">View Profile</p>
          <p className="user-info__dropdown-content--link">Settings</p>
          <button className="user-info__dropdown-content--link" onClick = {handleLogOut}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
