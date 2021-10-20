import React from "react";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import DeviceList from "../DeviceList/DeviceList";
import "./Devices.scss";

const Devices = () => {
  return (
      <div className="devices-page">
          <DeviceList />
      </div>
        
  );
};

export default Devices;
