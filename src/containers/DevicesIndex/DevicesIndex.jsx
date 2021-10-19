import React from 'react'
import { useParams } from 'react-router'
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import DeviceRisk from '../../components/DeviceRisk/DeviceRisk';
import { devices } from "../../data/devices"

const DevicesIndex = (props) => {
    const {type, brand, model, OS, ipAddress, lastActive, securityRisk } = props;

    const { name } = useParams();

    return (
        <div>
            <DeviceRisk title="your device is at risk" message="check out your stats"/>
            <DeviceInfo name={devices.name} />
        </div>
    )
}

export default DevicesIndex
