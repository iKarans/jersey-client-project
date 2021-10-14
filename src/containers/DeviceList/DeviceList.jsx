import React, { useState, useEffect } from "react";
import { devices } from "../../data/devices";
import { order } from "../../data/devices";
import { DeviceBar } from "../../components/DeviceBar/DeviceBar";
import "./DeviceList.scss";
import search from "../../assets/devices/search.png";
import filterIcon from "../../assets/devices/filterIcon.png";
import sortIcon from "../../assets/devices/sortIcon.png";

export const DeviceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [deviceList, setDeviceList] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const sortDevices = () => {
    if (!sorted) {
      setDeviceList(
        [...devices].sort((a, b) => {
          return order[a.securityRisk] - order[b.securityRisk];
        })
      );
      setSorted(!sorted);
    } else {
      setDeviceList(devices);
      setSorted(!sorted);
    }
  };
  const filterDevices = () => {
    if (!filtered) {
      setDeviceList(devices.filter((device) => device.securityRisk === "high"));
      setFiltered(!filtered);
    } else if (filtered) {
      setDeviceList(devices);
      setFiltered(!filtered);
    }
  };
  const handleInput = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchTerm(input);
  };

  useEffect(() => {
    if (searchTerm.length !== 0) {
      setDeviceList(
        devices.filter((device) =>
          device.name.toLowerCase().includes(searchTerm)
        )
      );
    } else {
      setDeviceList(devices);
    }
  }, [searchTerm]);

  return (
    <div className="devices">
      <div className="devices__search-options">
        <form className="devices__search-options--search-bar">
          <img src={search} alt="search icon" />
          <input
            type="text"
            name="deviceSearch"
            onInput={handleInput}
            className="search-bar__input"
            placeholder="Search by Device name"
          />
          <label htmlFor="deviceSearch" className="search-bar__label"></label>
        </form>
        <div className="devices__search-options--filter-and-sort">
          <img src={sortIcon} alt="sort icon" onClick={sortDevices} />
          <img src={filterIcon} alt="filter icon" onClick={filterDevices} />
        </div>
      </div>
      <div className="devices__list-labels">
        <p>Device Name</p>
        <p>Device Type</p>
        <p>Brand</p>
        <p>Model</p>
        <p>Operating System</p>
        <p>IP Address</p>
        <p>Last Active</p>
        <p>Security Risk</p>
      </div>
      <div className="devices__list">
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
