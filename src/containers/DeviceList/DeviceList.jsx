import React from "react";
import { devices } from "../../data/devices";
import { DeviceBar } from "../../components/DeviceBar/DeviceBar";
import "./DeviceList.scss";
console.log(devices);
const handleinput = () => {};
export const DeviceList = () => {
  return (
    <div className="devices">
      <div classname="searchOptions">
        <form className="search-bar">
          <label htmlFor="deviceSearch" className="search-bar__label">
            Search
          </label>
          <input
            type="text"
            name="deviceSearch"
            onInput={handleinput()}
            className="search-bar__input"
          />
        </form>
      </div>
      <div className="devicesList">
        {devices && devices.length !== 0 ? (
          devices.map((device) => (
            <DeviceBar key={device.name} device={device} />
          ))
        ) : (
          <p>no devices found</p>
        )}
      </div>
    </div>
  );
};
