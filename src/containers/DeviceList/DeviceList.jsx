import React, { useState, useEffect } from "react";
import { devices } from "../../data/devices";
import { DeviceBar } from "../../components/DeviceBar/DeviceBar";
import "./DeviceList.scss";

export const DeviceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceList, setDeviceList] = useState(devices);
  const handleInput = (event) => {
    const input = event.target.value;
    setSearchTerm(input);
  };
  useEffect(() => {
    if (searchTerm.length !== 0) {
      setDeviceList(
        devices.filter((device) => device.name.includes(searchTerm))
      );
    } else {
      setDeviceList(devices);
    }
  }, [searchTerm]);

  return (
    <div className="devices">
      <div className="searchOptions">
        <form className="search-bar">
          <input
            type="text"
            name="deviceSearch"
            onInput={handleInput}
            className="search-bar__input"
          />
          <label htmlFor="deviceSearch" className="search-bar__label">
            Search for Devices
          </label>
        </form>
      </div>
      <div className="deviceListLabels">
        <p>Device Name</p>
        <p>Device Type</p>
        <p>Brand</p>
        <p>Model</p>
        <p>Operating System</p>
        <p>IP Address</p>
        <p>Last Active</p>
        <p>Security Risk</p>
      </div>
      <div className="devicesList">
        {deviceList && deviceList.length !== 0 ? (
          deviceList.map((device) => (
            <DeviceBar key={device.name} device={device} />
          ))
        ) : (
          <p>no devices found</p>
        )}
      </div>
    </div>
  );
};
