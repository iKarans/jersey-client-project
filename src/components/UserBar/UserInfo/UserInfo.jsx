import React from "react";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="user-info__img"></div>
      <div className="user-info__dropdown">
        <button className="user-info__name">
          Richard Kovacek{" "}
          <img
            className="user-info__dropdown-arrow"
            src={whiteDropdown}
            alt="White Dropdown Arrow"
          ></img>
        </button>
        <p className="user-info__title">Admin</p>
        <div className="user-info__dropdown-content">

          <a className="user-info__dropdown-content--link" href="#">View Profile</a>
          <a className="user-info__dropdown-content--link" href="#">Settings</a>
          <a className="user-info__dropdown-content--link" href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
