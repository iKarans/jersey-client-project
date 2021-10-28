import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./UserInfo.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";
import { UserContext } from "../../../containers/Context/UserContext/UserContext";
import { getAuth } from "firebase/auth";

const UserInfo = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const { handleLogout } = useContext(UserContext);

  return (
    <div className="user-info">
      <div className="user-info__img"></div>
      <div className="user-info__dropdown">
        <button className="user-info__name">
          {user.displayName}
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
