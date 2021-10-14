import React from "react";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";

import placeholderProfile from "./../../../assets/header/placeholder-profile.jpg";

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
          <p className="user-info__dropdown-content--heading">Filler Text - nothing on figma</p>
          <a className="user-info__dropdown-content--link" href="#"></a>
          <a className="user-info__dropdown-content--link" href="#"></a>
          <a className="user-info__dropdown-content--link" href="#"></a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
