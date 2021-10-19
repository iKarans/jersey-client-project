import React from 'react'
import { devices } from "../../data/devices"

const DeviceInfo = (props) => {
    const { name, type, brand, model, OS, ipAddress, lastActive, securityRisk } = props;

    return (
        <div className="device-info">
            <h4>Device Information</h4>
            <p><b>Device Name:</b>{name}</p>
            <p><b>IP Address:</b>{ipAddress}</p>
        </div>
    )
}

export default DeviceInfo
