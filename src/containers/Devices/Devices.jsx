import React from "react";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import "./Devices.scss";

const Devices = () => {
  return (
    <div className="devices__text">
      
      <DeviceRisk title="hello" message="Risky device" />
    </div>
  );
};

export default Devices;
