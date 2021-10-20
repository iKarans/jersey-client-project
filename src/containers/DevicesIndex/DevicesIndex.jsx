import React from "react";
import { useParams } from "react-router";
import DeviceInfo from "../../components/DeviceInfo/DeviceInfo";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import { devices } from "../../data/devices";
import "./DevicesIndex.scss"

const DevicesIndex = () => {
  const { device } = useParams();
  const filteredDevice = devices.find(
    (singleDevice) => singleDevice.name == device
  );

  return (
    <div className="devices-index">
      <DeviceRisk securityRisk={filteredDevice.securityRisk}/>
      <DeviceInfo name = {filteredDevice.name} type = {filteredDevice.type} brand = {filteredDevice.brand} model = {filteredDevice.model} OS = {filteredDevice.OS} ipAddress = {filteredDevice.ipAddress} lastActive = {filteredDevice.lastActive}/>
    </div>
  );
};

export default DevicesIndex;
