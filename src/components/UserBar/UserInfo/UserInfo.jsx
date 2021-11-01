import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";
import { UserContext } from "../../../context/UserContext/UserContext";
import { auth } from "../../../firebase";

const UserInfo = () => {

  const userInfo = auth.currentUser;
  const { handleLogout } = useContext(UserContext);


  const userName = auth.currentUser ? userInfo.displayName : "";


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
        <div className="user-info__dropdown-content">
          <p className="user-info__dropdown-content--link">View Profile</p>
          <Link to="/settings" className="user-info__dropdown-content--link">
            Settings
          </Link>
          <p
            className="user-info__dropdown-content--link"
            onClick={handleLogout}
          >
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};

<Link to="/login">Login</Link>;

export default UserInfo;
