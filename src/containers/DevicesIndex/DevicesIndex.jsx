import React, { useState } from "react";
import { useParams } from "react-router";
import Button from "../../components/Button/Button";
import DeviceInfo from "../../components/DeviceInfo/DeviceInfo";
import DeviceRisk from "../../components/DeviceRisk/DeviceRisk";
import { devices } from "../../data/devices";
import "./DevicesIndex.scss";

const DevicesIndex = () => {
  const { device } = useParams();

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const filteredDevice = devices.find(
    (singleDevice) => singleDevice.name === device
  );

  return (
    <div className="devices-index">
      <h1>{device.name}</h1>
      <DeviceRisk
        toggleModal={toggleModal}
        securityRisk={filteredDevice.securityRisk}
      />

      <DeviceInfo
        name={filteredDevice.name}
        type={filteredDevice.type}
        brand={filteredDevice.brand}
        model={filteredDevice.model}
        OS={filteredDevice.OS}
        ipAddress={filteredDevice.ipAddress}
        lastActive={filteredDevice.lastActive}
      />

      {modal && (
        <div className="modal">
          <div className="overlay"> </div>
          <div className="modal-content">
            <div className="modal-text">
                <h4>Are you sure you want to block this device from the network?</h4>
                <p>This action cannot be undone.</p>
            </div>
            <Button toggleModal={toggleModal} text="Cancel" buttonRisk={true} />
            <Button toggleModal={toggleModal} text="Block Device" buttonRisk={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DevicesIndex;
