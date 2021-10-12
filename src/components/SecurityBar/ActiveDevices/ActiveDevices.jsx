import React from 'react'
import deviceIcon from "../../../assets/header/device-icon.svg"

const ActiveDevices = () => {
  return (
    <div className="active-devices">
      <div className="active-devices__icon">
        <img src={deviceIcon} alt="active devices" />
      </div>
      <div className="active-devices__info">
        <p className="active-devices__info--heading">
          Active Devices
        </p>
        <p className="active-devices__info--number">
          36
        </p>
      </div>
      
    </div>
  )
}

export default ActiveDevices
