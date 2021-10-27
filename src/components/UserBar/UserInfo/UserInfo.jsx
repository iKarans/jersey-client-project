import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";
import { UserContext } from "../../../containers/Context/UserContext/UserContext";


const UserInfo = (props) => {
  const { handleLogout } = useContext(UserContext);
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
          <Link to="/settings" className="user-info__dropdown-content--link">Settings</Link>
          <span className="user-info__dropdown-content--link" onClick = {handleLogout}>Logout</span>
        </div>
      </div>
    </div>
  );
};


<Link to="/login">Login</Link>

export default UserInfo;
