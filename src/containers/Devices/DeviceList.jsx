import React from "react";
import { devices } from "../../data/devices";
import { DeviceBar } from "../../components/DeviceBar/DeviceBar";
console.log(devices);
export const DeviceList = () => {
  return (
    <div className="deviceList">
      {devices && devices.length !== 0 ? (
        devices.map((device) => <DeviceBar key={device.name} device={device} />)
      ) : (
        <p>no devices found</p>
      )}
    </div>
  );
};
