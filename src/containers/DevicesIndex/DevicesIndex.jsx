import React from "react";
import { useParams } from "react-router";
import DeviceInfo from "../../components/DeviceInfo/DeviceInfo";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import { devices } from "../../data/devices";

const DevicesIndex = () => {
  const { device } = useParams();
  const filteredDevice = devices.find(
    (singleDevice) => singleDevice.name == device
  );

  return (
    <div>
      <h3>{device}</h3>
      <h4>{filteredDevice.brand}</h4>
      <DeviceInfo name = {filteredDevice.name} type = {filteredDevice.type} brand = {filteredDevice.brand} model = {filteredDevice.model} OS = {filteredDevice.OS} ipAddress = {filteredDevice.ipAddress} lastActive = {filteredDevice.lastActive}/>
      <DeviceRisk securityRisk={filteredDevice.securityRisk}/>
    </div>
  );
};

export default DevicesIndex;
