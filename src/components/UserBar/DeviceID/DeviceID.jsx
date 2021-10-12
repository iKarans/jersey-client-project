import React from "react";
import "./DeviceID.scss";
import whiteDropdown from "./../../../assets/global/white-dropdown.svg";

const DeviceID = () => {
  return (
    <div class="device-ID">
      <div class="device-ID__dropdown">
        <p>1a3cc5d0-49d9v2</p>
        <img src={whiteDropdown} alt="White Dropdown Arrow"></img>

        <div class="device-ID__dropdown-content">
          <p>
            <b>Please choose a network from the list below:</b>
          </p>
          <p class="device-ID__dropdown-content-link">1a3cc5d0-49d9v2</p>
          <p class="device-ID__dropdown-content-link">1a3cc5d0-49d9v2</p>
        </div>
      </div>
    </div>
  );
};

export default DeviceID;
