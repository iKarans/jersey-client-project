import React, { useState, useEffect } from "react";
import { devices } from "../../data/devices";
import { DeviceBar } from "../../components/DeviceBar/DeviceBar";
import "./DeviceList.scss";
import search from "../../assets/devices/search.png";
import filterIcon from "../../assets/devices/filterIcon.png";
import sortIcon from "../../assets/devices/sortIcon.png";

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
          <img src={search} alt="search icon" />
          <input
            type="text"
            name="deviceSearch"
            onInput={handleInput}
            className="search-bar__input"
          />
          <label htmlFor="deviceSearch" className="search-bar__label">
            Search by Device name
          </label>
        </form>
        <div className="filterAndSort">
          <img src={sortIcon} alt="sort icon" />
          <img src={filterIcon} alt="filter icon" />
        </div>
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
