import React, { useState } from "react";
import { useParams } from "react-router";
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
    (singleDevice) => singleDevice.name == device
  );

  return (
    <div>
      <h3>{device}</h3>
      <h4>{filteredDevice.brand}</h4>
      <DeviceInfo
        name={filteredDevice.name}
        type={filteredDevice.type}
        brand={filteredDevice.brand}
        model={filteredDevice.model}
        OS={filteredDevice.OS}
        ipAddress={filteredDevice.ipAddress}
        lastActive={filteredDevice.lastActive}
      />
      <DeviceRisk
        toggleModal={toggleModal}
        securityRisk={filteredDevice.securityRisk}
      />

      {modal && (
        <div className="modal">
          <div className="overlay"> </div>
          <div className="modal-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              vero expedita, debitis rem quos minus eaque cum fugit impedit
              rerum, aspernatur quam facere quasi nihil reprehenderit
              perferendis molestiae officiis distinctio.
            </p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevicesIndex;
