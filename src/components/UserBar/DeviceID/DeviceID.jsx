import React from "react";
import "./DeviceID.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";

const DeviceID = () => {
  return (
    <div className="device-ID">
      <div className="device-ID__dropdown">
        <button className="device-ID__dropdown-button">1a3cc5d0-49d9v2 </button>
        <img
          className="device-ID__dropdown-arrow"
          src={whiteDropdown}
          alt="White Dropdown Arrow"
        ></img>

        <div className="device-ID__dropdown-content">
          <p className="device-ID__dropdown-content--heading">
            <b>Please choose a network from the list below:</b>
          </p>
          <a className="device-ID__dropdown-content--link" href="#">
            1a3cc5d0-49d9v2
          </a>
          <a className="device-ID__dropdown-content--link" href="#">
            4950cc70-8b1d
          </a>
          <a className="device-ID__dropdown-content--link" href="#">
            d64dc599-6550
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeviceID;
